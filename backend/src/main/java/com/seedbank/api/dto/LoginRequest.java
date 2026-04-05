package com.seedbank.api.dto;

public record LoginRequest(String login, String password) {

    public String email() {
        return login;
    }
}
