const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {
  // Reset mock users before each test
  beforeEach(() => {
    app.users = [{ id: 1, email: 'user@example.com', password: 'password123' }];
  });

  describe('POST /api/login', () => {
    it('valid credentials return success', async () => {
      const res = await request(app)
        .post('/api/login')
        .send({ email: 'user@example.com', password: 'password123' });
      
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Login successful!');
    });

    it('invalid credentials return 401', async () => {
      const res = await request(app)
        .post('/api/login')
        .send({ email: 'wrong@example.com', password: 'wrong' });
      
      expect(res.statusCode).toBe(401);
    });
  });

  describe('POST /api/register', () => {
    it('registers a new user', async () => {
      const res = await request(app)
        .post('/api/register')
        .send({ email: 'new@example.com', password: 'newpass' });
      
      expect(res.statusCode).toBe(201);
      expect(res.body.user.email).toBe('new@example.com');
    });

    it('rejects duplicate emails', async () => {
      const res = await request(app)
        .post('/api/register')
        .send({ email: 'user@example.com', password: 'password123' });
      
      expect(res.statusCode).toBe(400);
    });
  });
});