package com.seedbank.api.controller;

import com.seedbank.api.dto.ClientProfileResponse;
import com.seedbank.api.dto.LoginRequest;
import com.seedbank.api.dto.LoginResponse;
import com.seedbank.api.dto.TransactionDTO;
import com.seedbank.api.model.UserEntity;
import com.seedbank.api.repository.TransactionRepository;
import com.seedbank.api.repository.UserRepository;
import com.seedbank.api.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthController(
            UserRepository userRepository,
            TransactionRepository transactionRepository,
            AuthenticationManager authenticationManager,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.transactionRepository = transactionRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        System.out.println("Recebendo tentativa de login para: " + request.email());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.login(), request.password())
        );

        return userRepository.findByEmail(request.login())
                .map(user -> ResponseEntity.ok(new LoginResponse(
                        jwtService.generateToken(user),
                        new LoginResponse.UserDTO(
                                user.getId().toString(),
                                user.getFullName(),
                                user.getEmail()
                        )
                )))
                .orElseGet(() -> ResponseEntity.status(401).build());
    }

    @GetMapping("/me")
    public ResponseEntity<ClientProfileResponse> getProfile(
            @RequestHeader("Authorization") String token,
            Authentication authentication
    ) {
        if (authentication == null || !(authentication.getPrincipal() instanceof UserEntity)) {
            return ResponseEntity.status(401).build();
        }

        UserEntity user = (UserEntity) authentication.getPrincipal();

        List<TransactionDTO> transactions = transactionRepository.findByUserEntityId(user.getId()).stream()
                .map(transaction -> new TransactionDTO(
                        transaction.getId().toString(),
                        transaction.getLabel(),
                        transaction.getAmount(),
                        transaction.getTransactionDate().toString()
                ))
                .toList();

        return ResponseEntity.ok(toClientProfileResponse(user, transactions));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok("{\"message\": \"Session ended successfully.\"}");
    }

    private ClientProfileResponse toClientProfileResponse(UserEntity user, List<TransactionDTO> transactions) {
        return new ClientProfileResponse(
                user.getId().toString(),
                user.getFullName(),
                user.getEmail(),
                user.getAccountType(),
                user.getAvailableBalance(),
                user.getCurrency(),
                user.getCardStatus(),
                user.getGoalName(),
                user.getGoalProgress(),
                transactions
        );
    }
}
