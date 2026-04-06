package com.seedbank.api.controller;

import com.seedbank.api.dto.LoginRequest;
import com.seedbank.api.dto.LoginResponse;
import com.seedbank.api.model.UserEntity;
import com.seedbank.api.repository.TransactionRepository;
import com.seedbank.api.repository.UserRepository;
import com.seedbank.api.security.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;

class AuthControllerPerfTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtService jwtService;

    @InjectMocks
    private AuthController authController;

    private UserEntity testUser;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        testUser = new UserEntity();
        testUser.setId(UUID.randomUUID());
        testUser.setEmail("test@example.com");
        testUser.setFullName("Test User");
        testUser.setPassword("password");

        Authentication authentication = mock(Authentication.class);
        when(authentication.getPrincipal()).thenReturn(testUser);

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(authentication);

        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(testUser));
        when(jwtService.generateToken(any())).thenReturn("mocked-jwt-token");
    }

    @Test
    void testLoginPerformance() {
        LoginRequest request = new LoginRequest("test@example.com", "password");

        // Warm up
        for (int i = 0; i < 1000; i++) {
            authController.login(request);
        }

        // Measure
        long startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            ResponseEntity<LoginResponse> response = authController.login(request);
            assertNotNull(response);
        }
        long endTime = System.nanoTime();

        long durationMs = (endTime - startTime) / 1_000_000;
        System.out.println("Login 10000 times took: " + durationMs + " ms");

        // Verify findByEmail was NOT called because it's optimized out
        verify(userRepository, times(0)).findByEmail("test@example.com");
    }
}
