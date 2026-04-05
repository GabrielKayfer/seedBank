package com.seedbank.api.dto;

public record LoginResponse(String token, UserDTO user) {
    public record UserDTO(String id, String fullName, String email) {}
}
