import { describe, it, expect, vi, beforeEach } from 'vitest';
import { chatApi } from './chatApi';
import { request } from './apiClient';

vi.mock('./apiClient', () => ({
  request: vi.fn(),
}));

describe('chatApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('sendPublicMessage', () => {
    it('should call request with the correct arguments', async () => {
      const mockResponse = { reply: 'Hello from the other side' };
      vi.mocked(request).mockResolvedValueOnce(mockResponse);

      const message = 'Hello';
      const result = await chatApi.sendPublicMessage(message);

      expect(request).toHaveBeenCalledWith('/public/chat', {
        method: 'POST',
        body: JSON.stringify({ message }),
      });
      expect(result).toEqual(mockResponse);
    });

    it('should handle errors from the request module', async () => {
      const mockError = new Error('API Error');
      vi.mocked(request).mockRejectedValueOnce(mockError);

      const message = 'Hello';

      await expect(chatApi.sendPublicMessage(message)).rejects.toThrow('API Error');
    });
  });

  describe('sendPrivateMessage', () => {
    it('should call request with the correct arguments including token', async () => {
      const mockResponse = { reply: 'Secret reply' };
      vi.mocked(request).mockResolvedValueOnce(mockResponse);

      const message = 'Hello';
      const token = 'fake-token';
      const result = await chatApi.sendPrivateMessage(message, token);

      expect(request).toHaveBeenCalledWith('/private/chat', {
        method: 'POST',
        body: JSON.stringify({ message }),
      }, token);
      expect(result).toEqual(mockResponse);
    });
  });
});
