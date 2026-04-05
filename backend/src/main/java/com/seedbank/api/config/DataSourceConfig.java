package com.seedbank.api.config;

import com.zaxxer.hikari.HikariDataSource;
import java.net.URI;
import java.net.URISyntaxException;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource dataSource(@Value("${app.database.url}") String databaseUrl) {
        HikariDataSource dataSource = new HikariDataSource();
        configurePostgresDataSource(dataSource, databaseUrl);
        return dataSource;
    }

    private void configurePostgresDataSource(HikariDataSource dataSource, String rawDatabaseUrl) {
        if (rawDatabaseUrl == null || rawDatabaseUrl.isBlank()) {
            throw new IllegalStateException("DATABASE_URL is not configured.");
        }

        String normalizedUrl = rawDatabaseUrl.trim();
        if (normalizedUrl.startsWith("jdbc:postgresql://")) {
            dataSource.setJdbcUrl(normalizedUrl);
            return;
        }

        if (normalizedUrl.startsWith("postgres://")) {
            normalizedUrl = "postgresql://" + normalizedUrl.substring("postgres://".length());
        }

        if (!normalizedUrl.startsWith("postgresql://")) {
            throw new IllegalStateException("Unsupported DATABASE_URL format: " + rawDatabaseUrl);
        }

        try {
            URI uri = new URI(normalizedUrl);
            String jdbcUrl = buildJdbcUrl(uri);
            dataSource.setJdbcUrl(jdbcUrl);

            String userInfo = uri.getUserInfo();
            if (userInfo != null && userInfo.contains(":")) {
                String[] credentials = userInfo.split(":", 2);
                dataSource.setUsername(credentials[0]);
                dataSource.setPassword(credentials[1]);
            }
        } catch (URISyntaxException exception) {
            throw new IllegalStateException("Invalid DATABASE_URL: " + rawDatabaseUrl, exception);
        }
    }

    private String buildJdbcUrl(URI uri) {
        String databaseName = uri.getPath() == null ? "" : uri.getPath();
        String jdbcUrl = "jdbc:postgresql://" + uri.getHost();

        if (uri.getPort() != -1) {
            jdbcUrl += ":" + uri.getPort();
        }

        jdbcUrl += databaseName;

        if (uri.getQuery() != null && !uri.getQuery().isBlank()) {
            jdbcUrl += "?" + uri.getQuery();
        }

        return jdbcUrl;
    }
}
