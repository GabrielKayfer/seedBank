package com.seedbank.api.controller;

import com.seedbank.api.dto.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*") // Essencial para o React (porta 5173 ou 3000) acessar o Spring (porta 8080)
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        // Mock hardcoded idêntico ao do Node.js para transição transparente
        LoginResponse.UserDTO user = new LoginResponse.UserDTO("client-001", "Gabriel Mendes", "client@seedbank.com");
        return ResponseEntity.ok(new LoginResponse("fake-jwt-seedbank-demo", user));
    }

    @GetMapping("/me")
    public ResponseEntity<ClientProfileResponse> getProfile(@RequestHeader("Authorization") String token) {
        // Mock hardcoded idêntico ao do Node.js
        List<TransactionDTO> transactions = List.of(
                new TransactionDTO("txn-001", "Spotify", new BigDecimal("-12.99"), "2026-03-08")
        );

        ClientProfileResponse profile = new ClientProfileResponse(
                "client-001", "Gabriel Mendes", "client@seedbank.com", "Premium Student",
                new BigDecimal("12840.55"), "USD", "Active", "Exchange Program", 68, transactions
        );
        return ResponseEntity.ok(profile);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok("{\"message\": \"Session ended successfully.\"}");
    }
}
