const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // ВАЖНО: Текст должен быть точно таким, как в app.js
    expect(res.text).toBe('CI/CD работает');
  });
});