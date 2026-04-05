package com.seedbank.api.dto;

import java.math.BigDecimal;
import java.util.List;

public record ClientProfileResponse(
        String id,
        String fullName,
        String email,
        String accountType,
        BigDecimal availableBalance,
        String currency,
        String cardStatus,
        String goalName,
        Integer goalProgress,
        List<TransactionDTO> recentTransactions
) {}
