package com.seedbank.api.controller;

import com.seedbank.api.dto.ChatRequest;
import com.seedbank.api.dto.ChatResponse;
import com.seedbank.api.service.GeminiChatService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ChatControllerTest {

    @Mock
    private GeminiChatService geminiChatService;

    @InjectMocks
    private ChatController chatController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(chatController).build();
    }

    @Test
    void testPublicChat() throws Exception {
        String testMessage = "Hello World";
        String testResponse = "Hello from Gemini!";

        when(geminiChatService.processPublicChat(testMessage)).thenReturn(testResponse);

        String jsonRequest = "{\"message\":\"" + testMessage + "\"}";

        mockMvc.perform(post("/api/v1/public/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonRequest))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.reply").value(testResponse));
    }

    @Test
    void testPrivateChat() throws Exception {
        String testMessage = "Account balance";
        String testResponse = "Your account balance is 1000";

        when(geminiChatService.processPrivateChat(testMessage)).thenReturn(testResponse);

        String jsonRequest = "{\"message\":\"" + testMessage + "\"}";

        mockMvc.perform(post("/api/v1/private/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonRequest))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.reply").value(testResponse));
    }
}
