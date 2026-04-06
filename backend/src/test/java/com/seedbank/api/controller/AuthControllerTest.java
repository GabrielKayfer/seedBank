package com.seedbank.api.controller;

import com.seedbank.api.dto.ClientProfileResponse;
import com.seedbank.api.dto.LoginRequest;
import com.seedbank.api.dto.LoginResponse;
import com.seedbank.api.model.UserEntity;
import com.seedbank.api.model.TransactionEntity;
import com.seedbank.api.repository.TransactionRepository;
import com.seedbank.api.repository.UserRepository;
import com.seedbank.api.security.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthControllerTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtService jwtService;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private AuthController authController;

    private UserEntity mockUser;
    private UUID userId;

    @BeforeEach
    void setUp() {
        userId = UUID.randomUUID();
        mockUser = new UserEntity();
        mockUser.setId(userId);
        mockUser.setFullName("John Doe");
        mockUser.setEmail("john.doe@example.com");
        mockUser.setAccountType("CHECKING");
        mockUser.setAvailableBalance(new BigDecimal("1000.00"));
        mockUser.setCurrency("USD");
        mockUser.setCardStatus("ACTIVE");
        mockUser.setGoalName("Vacation");
        mockUser.setGoalProgress(50);
    }

    @Test
    void getProfile_Success() {
        // Arrange
        String email = "john.doe@example.com";
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(mockUser));

        UUID transactionId = UUID.randomUUID();
        TransactionEntity transaction = new TransactionEntity();
        transaction.setId(transactionId);
        transaction.setLabel("Groceries");
        transaction.setAmount(new BigDecimal("-50.00"));
        transaction.setTransactionDate(LocalDate.now());
        transaction.setUserEntity(mockUser);

        when(transactionRepository.findByUserEntityId(userId))
                .thenReturn(List.of(transaction));

        // Act
        ResponseEntity<ClientProfileResponse> response = authController.getProfile("Bearer token", authentication);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(userId.toString(), response.getBody().id());
        assertEquals("John Doe", response.getBody().fullName());
        assertEquals("john.doe@example.com", response.getBody().email());
        assertEquals(1, response.getBody().recentTransactions().size());
        assertEquals(transactionId.toString(), response.getBody().recentTransactions().get(0).id());
        assertEquals("Groceries", response.getBody().recentTransactions().get(0).label());
        assertEquals(new BigDecimal("-50.00"), response.getBody().recentTransactions().get(0).amount());
    }

    @Test
    void getProfile_UserNotFound() {
        // Arrange
        String email = "notfound@example.com";
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<ClientProfileResponse> response = authController.getProfile("Bearer token", authentication);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNull(response.getBody());
    }

    @Test
    void getProfile_NoTransactions() {
        // Arrange
        String email = "john.doe@example.com";
        when(authentication.getName()).thenReturn(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(mockUser));

        when(transactionRepository.findByUserEntityId(userId))
                .thenReturn(Collections.emptyList());

        // Act
        ResponseEntity<ClientProfileResponse> response = authController.getProfile("Bearer token", authentication);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(userId.toString(), response.getBody().id());
        assertTrue(response.getBody().recentTransactions().isEmpty());
    }
}
