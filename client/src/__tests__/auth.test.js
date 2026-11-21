import axios from 'axios';
import { tokenConfig, login, register } from '../utils/auth';

jest.mock('axios');

describe('auth utils', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('sends the saved token in the x-auth-token header', () => {
    localStorage.setItem('lyf_token', 'abc123');
    expect(tokenConfig().headers['x-auth-token']).toBe('abc123');
  });

  it('omits the auth header when logged out', () => {
    expect(tokenConfig().headers).toEqual({ 'Content-type': 'application/json' });
  });

  it('saves the token after logging in', async () => {
    axios.post.mockResolvedValue({ data: { token: 'login-token', user: { name: 'Ada' } } });
    await login({ email: 'ada@example.com', password: 'pw' });
    expect(axios.post).toHaveBeenCalledWith('/api/auth/', { email: 'ada@example.com', password: 'pw' });
    expect(localStorage.getItem('lyf_token')).toBe('login-token');
  });

  it('saves the token after registering', async () => {
    axios.post.mockResolvedValue({ data: { token: 'new-token' } });
    await register({ name: 'Ada', email: 'ada@example.com', password: 'pw' });
    expect(localStorage.getItem('lyf_token')).toBe('new-token');
  });

  it('rethrows login failures so the form can show them', async () => {
    axios.post.mockRejectedValue(new Error('Invalid credentials'));
    await expect(login({ email: 'x', password: 'y' })).rejects.toThrow('Invalid credentials');
    expect(localStorage.getItem('lyf_token')).toBeNull();
  });
});
