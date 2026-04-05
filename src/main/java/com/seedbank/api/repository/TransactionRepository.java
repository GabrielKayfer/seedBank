package com.seedbank.api.repository;

import com.seedbank.api.model.TransactionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<TransactionEntity, UUID> {

    List<TransactionEntity> findByUserEntityId(UUID userId);
}
