package com.seedbank.api.dto;

import java.math.BigDecimal;

public record TransactionDTO(
        String id,
        String label,
        BigDecimal amount,
        String date
) {}
