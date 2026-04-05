package com.seedbank.api.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.BAD_GATEWAY;

@Service
public class GeminiChatService {
    private static final Logger log = LoggerFactory.getLogger(GeminiChatService.class);
    private static final String FALLBACK_MESSAGE = "No momento nao consegui processar sua mensagem.";

    private final RestClient restClient;
    private final String apiKey;
    private final String model;

    public GeminiChatService(
            @Value("${gemini.api.key}") String apiKey,
            @Value("${gemini.api.model:gemini-2.5-flash}") String model
    ) {
        this.restClient = RestClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com")
                .build();
        this.apiKey = apiKey;
        this.model = model;
    }

    public String processChat(String userMessage) {
        String prompt = "Voce e o assistente virtual do SeedBank, focado em educacao financeira. " +
                "O usuario Gabriel Mendes tem conta Premium e saldo de USD 12840.55. " +
                "Responda de forma curta, amigavel e sem usar Markdown. Pergunta do usuario: " + userMessage;

        GeminiRequest requestBody = new GeminiRequest(
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

    private record GeminiRequest(List<Content> contents) {}

    private record Content(List<Part> parts) {}

    private record Part(String text) {}

    private record GeminiResponse(List<Candidate> candidates) {}

    private record Candidate(Content content) {}
}
