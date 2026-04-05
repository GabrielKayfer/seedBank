package com.seedbank.api.controller;

import com.seedbank.api.dto.ChatRequest;
import com.seedbank.api.dto.ChatResponse;
import com.seedbank.api.service.GeminiChatService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class ChatController {

    private final GeminiChatService geminiChatService;

    public ChatController(GeminiChatService geminiChatService) {
        this.geminiChatService = geminiChatService;
    }

    @PostMapping("/public/chat")
    public ChatResponse publicChat(@RequestBody ChatRequest request) {
        return new ChatResponse(geminiChatService.processPublicChat(request.message()));
    }

    @PostMapping("/private/chat")
    public ChatResponse privateChat(@RequestBody ChatRequest request) {
        return new ChatResponse(geminiChatService.processPrivateChat(request.message()));
    }
}
