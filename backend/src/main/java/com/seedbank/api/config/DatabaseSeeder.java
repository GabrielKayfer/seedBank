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
import java.util.ArrayList;
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
            if (userRepository.count() == 0) {
                List<TransactionSeed> transactionSeeds = List.of(
                        new TransactionSeed("Salario", new BigDecimal("15000.00"), 30),
                        new TransactionSeed("Aluguel", new BigDecimal("-3500.00"), 28),
                        new TransactionSeed("Condominio", new BigDecimal("-600.00"), 27),
                        new TransactionSeed("Internet", new BigDecimal("-150.00"), 25),
                        new TransactionSeed("Supermercado", new BigDecimal("-800.00"), 24),
                        new TransactionSeed("Posto Shell", new BigDecimal("-250.00"), 22),
                        new TransactionSeed("Netflix", new BigDecimal("-55.90"), 21),
                        new TransactionSeed("Spotify", new BigDecimal("-21.90"), 20),
                        new TransactionSeed("iFood", new BigDecimal("-120.00"), 19),
                        new TransactionSeed("Farmacia", new BigDecimal("-90.00"), 18),
                        new TransactionSeed("Transferencia recebida", new BigDecimal("450.00"), 16),
                        new TransactionSeed("Restaurante Japones", new BigDecimal("-200.00"), 15),
                        new TransactionSeed("Gympass", new BigDecimal("-120.00"), 13),
                        new TransactionSeed("Uber", new BigDecimal("-85.00"), 12),
                        new TransactionSeed("Amazon", new BigDecimal("-180.00"), 10),
                        new TransactionSeed("Livraria", new BigDecimal("-140.00"), 8),
                        new TransactionSeed("Coffee Shop", new BigDecimal("-35.00"), 7),
                        new TransactionSeed("Cinema", new BigDecimal("-70.00"), 5),
                        new TransactionSeed("Aporte Viagem Japao", new BigDecimal("-1000.00"), 3),
                        new TransactionSeed("Freelance", new BigDecimal("820.00"), 1)
                );

                BigDecimal finalBalance = transactionSeeds.stream()
                        .map(TransactionSeed::amount)
                        .reduce(BigDecimal.ZERO, BigDecimal::add);

                UserEntity user = new UserEntity();
                user.setFullName("Gabriel Mendes");
                user.setEmail("client@seedbank.com");
                String seederPassword = System.getenv("SEEDER_PASSWORD");
                if (seederPassword == null || seederPassword.isEmpty()) {
                    seederPassword = java.util.UUID.randomUUID().toString();
                }
                user.setPassword(passwordEncoder.encode(seederPassword));
                user.setAccountType("Premium Student");
                user.setAvailableBalance(finalBalance);
                user.setCurrency("USD");
                user.setCardStatus("Active");
                user.setGoalName("Exchange Program");
                user.setGoalProgress(68);

                UserEntity savedUser = userRepository.save(user);

                List<TransactionEntity> transactions = new ArrayList<>();
                LocalDate today = LocalDate.now();

                for (TransactionSeed seed : transactionSeeds) {
                    TransactionEntity transaction = new TransactionEntity();
                    transaction.setLabel(seed.label());
                    transaction.setAmount(seed.amount());
                    transaction.setTransactionDate(today.minusDays(seed.daysAgo()));
                    transaction.setUserEntity(savedUser);
                    transactions.add(transaction);
                }

                transactionRepository.saveAll(transactions);
            }
        };
    }

    private record TransactionSeed(String label, BigDecimal amount, long daysAgo) {
    }
}
