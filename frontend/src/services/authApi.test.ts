import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authApi } from './authApi';
import { request } from './apiClient';

// Mock the apiClient module
vi.mock('./apiClient', () => ({
  request: vi.fn()
}));

describe('authApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('login', () => {
    it('should call request with the correct arguments', async () => {
      const payload = { password: 'testPassword', email: 'test@example.com' };
      const mockResponse = { token: 'mockToken', user: { id: '1', fullName: 'John', email: 'test@example.com' } };

      // Setup the mock to return a value
      vi.mocked(request).mockResolvedValueOnce(mockResponse);

      const result = await authApi.login(payload);

      expect(request).toHaveBeenCalledTimes(1);
      expect(request).toHaveBeenCalledWith('/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('me', () => {
    it('should call request with the correct arguments including the token', async () => {
      const token = 'test-token-123';
      const mockProfile = {
        id: '1',
        fullName: 'John',
        email: 'test@example.com',
        accountType: 'PREMIUM',
        availableBalance: 1000,
        currency: 'USD',
        cardStatus: 'ACTIVE',
        goalName: 'Savings',
        goalProgress: 50,
        recentTransactions: []
      };

      vi.mocked(request).mockResolvedValueOnce(mockProfile);

      const result = await authApi.me(token);

      expect(request).toHaveBeenCalledTimes(1);
      expect(request).toHaveBeenCalledWith('/auth/me', { method: 'GET' }, token);
      expect(result).toEqual(mockProfile);
    });
  });

  describe('logout', () => {
    it('should call request with the correct arguments including the token', async () => {
      const token = 'test-token-123';
      const mockResponse = { message: 'Logged out successfully' };

      vi.mocked(request).mockResolvedValueOnce(mockResponse);

      const result = await authApi.logout(token);

      expect(request).toHaveBeenCalledTimes(1);
      expect(request).toHaveBeenCalledWith('/auth/logout', { method: 'POST' }, token);
      expect(result).toEqual(mockResponse);
    });
  });
});
