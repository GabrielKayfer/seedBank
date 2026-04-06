import { describe, it, expect, beforeEach } from 'vitest';
import { persistAuthToken, getStoredAuthToken } from './authToken';

const PRIMARY_AUTH_TOKEN_STORAGE_KEY = "token";
const LEGACY_AUTH_TOKEN_STORAGE_KEY = "seedbank_auth_token";

describe('authToken service', () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure a clean state
    localStorage.clear();
  });

  describe('persistAuthToken', () => {
    it('should store the token in both primary and legacy keys when a valid token is provided', () => {
      const token = 'test-valid-token-123';

      persistAuthToken(token);

      expect(localStorage.getItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY)).toBe(token);
      expect(localStorage.getItem(LEGACY_AUTH_TOKEN_STORAGE_KEY)).toBe(token);
    });

    it('should remove both primary and legacy tokens when null is provided', () => {
      // First set some tokens
      localStorage.setItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY, 'old-token');
      localStorage.setItem(LEGACY_AUTH_TOKEN_STORAGE_KEY, 'old-token');

      persistAuthToken(null);

      expect(localStorage.getItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY)).toBeNull();
      expect(localStorage.getItem(LEGACY_AUTH_TOKEN_STORAGE_KEY)).toBeNull();
    });

    it('should remove both primary and legacy tokens when an empty string is provided', () => {
      // First set some tokens
      localStorage.setItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY, 'old-token');
      localStorage.setItem(LEGACY_AUTH_TOKEN_STORAGE_KEY, 'old-token');

      persistAuthToken('');

      expect(localStorage.getItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY)).toBeNull();
      expect(localStorage.getItem(LEGACY_AUTH_TOKEN_STORAGE_KEY)).toBeNull();
    });
  });

  describe('getStoredAuthToken', () => {
    it('should return the primary token if it exists', () => {
      const token = 'primary-token';
      localStorage.setItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY, token);

      expect(getStoredAuthToken()).toBe(token);
    });

    it('should return the legacy token if primary does not exist', () => {
      const legacyToken = 'legacy-token';
      localStorage.setItem(LEGACY_AUTH_TOKEN_STORAGE_KEY, legacyToken);

      expect(getStoredAuthToken()).toBe(legacyToken);
    });

    it('should return primary token even if legacy token exists', () => {
      const primaryToken = 'primary-token';
      const legacyToken = 'legacy-token';
      localStorage.setItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY, primaryToken);
      localStorage.setItem(LEGACY_AUTH_TOKEN_STORAGE_KEY, legacyToken);

      expect(getStoredAuthToken()).toBe(primaryToken);
    });

    it('should return null if neither token exists', () => {
      expect(getStoredAuthToken()).toBeNull();
    });
  });
});
