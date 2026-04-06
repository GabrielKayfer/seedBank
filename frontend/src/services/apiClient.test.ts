import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { request, ApiClientError, API_BASE_URL } from './apiClient';

describe('apiClient request', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should successfully fetch and return data on happy path', async () => {
    const mockData = { message: 'Success' };
    const fetchMock = vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
      status: 200,
    } as unknown as Response);

    const result = await request('/test-path');

    expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/test-path`, expect.objectContaining({
      headers: {
        'Content-Type': 'application/json',
      },
    }));
    expect(result).toEqual(mockData);
  });

  it('should merge headers correctly including Authorization when token provided', async () => {
    const mockData = { id: 1 };
    const fetchMock = vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
      status: 200,
    } as unknown as Response);

    const result = await request('/test-path', { headers: { 'X-Custom-Header': 'CustomValue' } }, 'test-token');

    expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/test-path`, expect.objectContaining({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test-token',
        'X-Custom-Header': 'CustomValue',
      },
    }));
    expect(result).toEqual(mockData);
  });

  it('should throw ApiClientError when response is not ok and parsing fails', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: vi.fn().mockRejectedValue(new Error('Parse error')),
      status: 500,
    } as unknown as Response);

    await expect(request('/error-path')).rejects.toThrowError(ApiClientError);
    await expect(request('/error-path')).rejects.toThrowError('Request failed.');
  });

  it('should throw ApiClientError with specific error message when available', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ error: 'Specific API Error' }),
      status: 400,
    } as unknown as Response);

    await expect(request('/error-path')).rejects.toThrowError(ApiClientError);
    await expect(request('/error-path')).rejects.toThrowError('Specific API Error');
  });

  it('should handle JSON parsing errors returning null and throw correct error if ok is false', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: vi.fn().mockRejectedValue(new SyntaxError('Invalid JSON')),
      status: 502,
    } as unknown as Response);

    try {
      await request('/bad-json');
      expect.unreachable('Should have thrown an error');
    } catch (error) {
      expect(error).toBeInstanceOf(ApiClientError);
      expect((error as ApiClientError).status).toBe(502);
      expect((error as ApiClientError).message).toBe('Request failed.');
    }
  });

  it('should handle API returning null on success (if possible/handled)', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: vi.fn().mockRejectedValue(new SyntaxError('Invalid JSON')),
      status: 204, // e.g. No Content
    } as unknown as Response);

    const result = await request('/no-content');

    expect(result).toBeNull();
  });
});
