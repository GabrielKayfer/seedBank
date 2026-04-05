package com.seedbank.api.service;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.seedbank.api.model.TransactionEntity;
import com.seedbank.api.model.UserEntity;
import com.seedbank.api.repository.TransactionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.BAD_GATEWAY;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@Service
public class GeminiChatService {
    private static final Logger log = LoggerFactory.getLogger(GeminiChatService.class);
    private static final String FALLBACK_MESSAGE = "No momento nao consegui processar sua mensagem.";
    private static final String SYSTEM_PROMPT = """
            Voce e o SeedBot, o assistente financeiro oficial do SeedBank. Sua voz e profissional, encorajadora e segura.

            Knowledge Base do SeedBank:
            - Plano Silver: conta digital de entrada, cartao internacional, Pix e transferencias sem tarifa, suporte em horario comercial.
            - Plano Gold: todos os beneficios do Silver, cashback em compras selecionadas, limite de cartao superior, atendimento prioritario e metas financeiras assistidas.
            - Plano Black: todos os beneficios do Gold, gerente dedicado, experiencias premium, atendimento VIP 24/7, maior limite e consultoria financeira personalizada.
            - Taxa de manutencao: Silver sem mensalidade, Gold USD 14.90 por mes, Black USD 39.90 por mes.
            - Transferencias e Pix: gratuitos dentro do SeedBank e sem tarifa para Pix.
            - Saque internacional: Silver USD 4.50 por saque, Gold USD 2.50 por saque, Black sem tarifa nos saques elegiveis.
            - Cambio e compras internacionais: spread reduzido progressivamente do Silver para o Black.

            Guardrails:
            - Nunca de conselhos de investimento ilegais.
            - Nunca revele dados de outros usuarios.
            - Se nao souber algo sobre o banco, oriente o usuario a contatar o suporte humano.
            - Nao invente politicas, tarifas ou produtos fora da base de conhecimento fornecida.
            - Responda sem usar Markdown e com linguagem clara.
            """;

    private final RestClient restClient;
    private final String apiKey;
    private final String model;
    private final TransactionRepository transactionRepository;

    public GeminiChatService(
            TransactionRepository transactionRepository,
            @Value("${google.ai.api.key}") String apiKey,
            @Value("${gemini.api.model:gemini-2.5-flash}") String model
    ) {
        this.restClient = RestClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com")
                .build();
        this.transactionRepository = transactionRepository;
        this.apiKey = apiKey;
        this.model = model;
    }

    public String processPublicChat(String userMessage) {
        String prompt = "Contexto da conversa: atendimento publico do SeedBank. " +
                "Responda apenas perguntas gerais sobre conta digital, planos, seguranca, beneficios, taxas e como comecar. " +
                "Nao assuma autenticacao, nao acesse dados pessoais e, se a pergunta exigir dados da conta, oriente o usuario a entrar na area autenticada. " +
                "Pergunta do usuario: " + userMessage;

        return processPrompt(prompt);
    }

    public String processPrivateChat(String userMessage) {
        UserEntity user = getAuthenticatedUser();
        List<TransactionEntity> latestTransactions = transactionRepository.findByUserEntityId(user.getId()).stream()
                .sorted((left, right) -> right.getTransactionDate().compareTo(left.getTransactionDate()))
                .limit(5)
                .toList();

        String transactionsSummary = latestTransactions.isEmpty()
                ? "Nenhuma transacao recente encontrada."
                : latestTransactions.stream()
                        .map(transaction -> transaction.getLabel()
                                + " em "
                                + transaction.getTransactionDate()
                                + " no valor de "
                                + formatBalance(transaction.getAmount(), user.getCurrency()))
                        .collect(Collectors.joining("; "));

        String prompt = "Voce e o gerente VIP do SeedBank. " +
                "Atue como um consultor financeiro consultivo, proativo, claro e objetivo. " +
                "Cliente autenticado: " + user.getFullName() + ". " +
                "Email: " + user.getEmail() + ". " +
                "Plano atual: " + user.getAccountType() + ". " +
                "Saldo disponivel: " + formatBalance(user.getAvailableBalance(), user.getCurrency()) + ". " +
                "Status do cartao: " + user.getCardStatus() + ". " +
                "Meta financeira ativa: " + user.getGoalName() + " com progresso de " + user.getGoalProgress() + "%. " +
                "Ultimas transacoes: " + transactionsSummary + ". " +
                "Use esse contexto para responder de forma personalizada, sugerindo proximos passos uteis quando fizer sentido, " +
                "sem inventar dados nao presentes no contexto. " +
                "Pergunta do cliente: " + userMessage;

        return processPrompt(prompt);
    }

    private UserEntity getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !(authentication.getPrincipal() instanceof UserEntity user)) {
            throw new ResponseStatusException(UNAUTHORIZED, "Usuario autenticado nao encontrado.");
        }

        return user;
    }

    private String formatBalance(BigDecimal amount, String currency) {
        return currency + " " + amount;
    }

    private String processPrompt(String prompt) {

        GeminiRequest requestBody = new GeminiRequest(
                new Content(List.of(new Part(SYSTEM_PROMPT))),
                List.of(new Content(List.of(new Part(prompt))))
        );

        try {
            GeminiResponse response = restClient.post()
                    .uri(uriBuilder -> uriBuilder
                            .path("/v1beta/models/{model}:generateContent")
                            .build(model))
                    .header("x-goog-api-key", apiKey)
                    .header(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(requestBody)
                    .retrieve()
                    .body(GeminiResponse.class);

            if (response == null || response.candidates() == null || response.candidates().isEmpty()) {
                return FALLBACK_MESSAGE;
            }

            Candidate candidate = response.candidates().get(0);
            if (candidate == null || candidate.content() == null || candidate.content().parts() == null || candidate.content().parts().isEmpty()) {
                return FALLBACK_MESSAGE;
            }

            Part part = candidate.content().parts().get(0);
            return part != null && part.text() != null && !part.text().isBlank()
                    ? part.text().trim()
                    : FALLBACK_MESSAGE;
        } catch (RestClientResponseException ex) {
            log.error("Gemini request failed with status {} and body {}", ex.getStatusCode(), ex.getResponseBodyAsString());
            throw new ResponseStatusException(BAD_GATEWAY, "Falha ao consultar o Gemini.", ex);
        }
    }

    private record GeminiRequest(
            @JsonProperty("system_instruction")
            Content systemInstruction,
            List<Content> contents
    ) {}

    private record Content(List<Part> parts) {}

    private record Part(String text) {}

    private record GeminiResponse(List<Candidate> candidates) {}

    private record Candidate(Content content) {}
}
