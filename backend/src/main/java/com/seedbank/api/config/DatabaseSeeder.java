package com.seedbank.api.config;

import com.seedbank.api.model.TransactionEntity;
import com.seedbank.api.model.UserEntity;
import com.seedbank.api.repository.TransactionRepository;
import com.seedbank.api.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Configuration
public class DatabaseSeeder {

    @Bean
    CommandLineRunner seedDatabase(
            UserRepository userRepository,
            TransactionRepository transactionRepository,
            PasswordEncoder passwordEncoder
    ) {
        return args -> {
            if (userRepository.findByEmail("client@seedbank.com").isPresent()) {
                return;
            }

            UserEntity user = new UserEntity();
            user.setFullName("Gabriel Mendes");
            user.setEmail("client@seedbank.com");
            user.setPassword(passwordEncoder.encode("senha123"));
            user.setAccountType("Premium Student");
            user.setAvailableBalance(new BigDecimal("12840.55"));
            user.setCurrency("USD");
            user.setCardStatus("Active");
            user.setGoalName("Exchange Program");
            user.setGoalProgress(68);

            UserEntity savedUser = userRepository.save(user);

            TransactionEntity spotify = new TransactionEntity();
            spotify.setLabel("Spotify");
            spotify.setAmount(new BigDecimal("-12.99"));
            spotify.setTransactionDate(LocalDate.of(2026, 3, 8));
            spotify.setUserEntity(savedUser);

            TransactionEntity netflix = new TransactionEntity();
            netflix.setLabel("Netflix");
            netflix.setAmount(new BigDecimal("-15.90"));
            netflix.setTransactionDate(LocalDate.of(2026, 3, 10));
            netflix.setUserEntity(savedUser);

            transactionRepository.saveAll(List.of(spotify, netflix));
        };
    }
}
