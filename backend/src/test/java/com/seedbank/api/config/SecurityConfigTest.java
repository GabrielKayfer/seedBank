package com.seedbank.api.config;

import org.junit.jupiter.api.Test;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SecurityConfigTest {

    @Test
    void testCorsConfigurationDoesNotAllowWildcardVercel() {
        SecurityConfig config = new SecurityConfig(null, null);
        CorsConfigurationSource source = config.corsConfigurationSource();

        UrlBasedCorsConfigurationSource urlBasedSource = (UrlBasedCorsConfigurationSource) source;
        CorsConfiguration corsConfig = urlBasedSource.getCorsConfigurations().get("/**");

        List<String> allowedOriginPatterns = corsConfig.getAllowedOriginPatterns();

        assertTrue(allowedOriginPatterns.contains("https://seed-bank-five.vercel.app"), "Specific vercel app should be allowed");
        assertTrue(allowedOriginPatterns.contains("http://localhost:5173"), "Localhost should be allowed");

        assertFalse(allowedOriginPatterns.contains("https://*.vercel.app"), "Wildcard vercel app should NOT be allowed due to security risk");
    }
}
