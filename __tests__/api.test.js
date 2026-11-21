process.env.JWT_SECRET = 'test-secret';

const express = require('express');
const request = require('supertest');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

jest.mock('../models/User', () => {
  const User = jest.fn(function User(fields) {
    Object.assign(this, fields, { id: 'new-user-id' });
    this.save = jest.fn().mockResolvedValue(this);
  });
  User.findOne = jest.fn();
  User.findById = jest.fn();
  User.updateOne = jest.fn();
  return User;
});

const User = require('../models/User');
const { auth } = require('../middleware/auth');

const buildApp = () => {
  const app = express();
  app.use(express.json());
  app.use('/api/users', require('../routes/api/users'));
  app.use('/api/auth', require('../routes/api/auth'));
  app.use('/api/memorized', require('../routes/api/memorized'));
  return app;
};

const tokenFor = (id) => jwt.sign({ id }, process.env.JWT_SECRET);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('auth middleware', () => {
  const run = (token) => {
    const req = { header: () => token };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();
    auth(req, res, next);
    return { req, res, next };
  };

  it('rejects requests without a token', () => {
    const { res, next } = run(undefined);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it('rejects invalid tokens', () => {
    const { res, next } = run('not-a-jwt');
    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });

  it('attaches the user from a valid token', () => {
    const { req, next } = run(tokenFor('user-1'));
    expect(next).toHaveBeenCalled();
    expect(req.user.id).toBe('user-1');
  });
});

describe('POST /api/users (register)', () => {
  it('requires name, email and password', async () => {
    const res = await request(buildApp()).post('/api/users').send({ email: 'a@b.com' });
    expect(res.body).toEqual({ success: false, msg: 'Please enter all fields.' });
  });

  it('rejects an email that is already registered', async () => {
    User.findOne.mockResolvedValue({ email: 'a@b.com' });
    const res = await request(buildApp())
      .post('/api/users')
      .send({ name: 'Ada', email: 'a@b.com', password: 'pw' });
    expect(res.body).toEqual({ success: false, msg: 'User already exists.' });
  });

  it('hashes the password and returns a token for new users', async () => {
    User.findOne.mockResolvedValue(null);
    const res = await request(buildApp())
      .post('/api/users')
      .send({ name: 'Ada', email: 'a@b.com', password: 'pw' });

    expect(res.body.success).toBe(true);
    expect(res.body.user).toEqual({ name: 'Ada', id: 'new-user-id', email: 'a@b.com' });
    expect(jwt.verify(res.body.token, process.env.JWT_SECRET).id).toBe('new-user-id');

    const savedUser = User.mock.instances[0];
    expect(savedUser.password).not.toBe('pw');
    expect(await bcrypt.compare('pw', savedUser.password)).toBe(true);
  });
});

describe('POST /api/auth (login)', () => {
  const storedUser = async () => ({
    id: 'user-1',
    name: 'Ada',
    email: 'a@b.com',
    password: await bcrypt.hash('correct', 4),
    memorized_flags: ['France'],
  });

  it('requires email and password', async () => {
    const res = await request(buildApp()).post('/api/auth').send({ email: 'a@b.com' });
    expect(res.status).toBe(400);
  });

  it('rejects unknown users', async () => {
    User.findOne.mockResolvedValue(null);
    const res = await request(buildApp()).post('/api/auth').send({ email: 'a@b.com', password: 'x' });
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('User does not exist');
  });

  it('rejects a wrong password', async () => {
    User.findOne.mockResolvedValue(await storedUser());
    const res = await request(buildApp()).post('/api/auth').send({ email: 'a@b.com', password: 'wrong' });
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Invalid credentials');
  });

  it('returns a token and the memorized flags on success', async () => {
    User.findOne.mockResolvedValue(await storedUser());
    const res = await request(buildApp()).post('/api/auth').send({ email: 'a@b.com', password: 'correct' });
    expect(res.status).toBe(200);
    expect(res.body.user).toEqual({
      name: 'Ada',
      id: 'user-1',
      email: 'a@b.com',
      memorized_flags: ['France'],
    });
    expect(jwt.verify(res.body.token, process.env.JWT_SECRET).id).toBe('user-1');
  });

  it('returns the logged-in user without the password', async () => {
    const select = jest.fn().mockResolvedValue({ name: 'Ada' });
    User.findById.mockReturnValue({ select });
    const res = await request(buildApp()).get('/api/auth').set('x-auth-token', tokenFor('user-1'));
    expect(User.findById).toHaveBeenCalledWith('user-1');
    expect(select).toHaveBeenCalledWith('-password');
    expect(res.body).toEqual({ user: { name: 'Ada' } });
  });
});

describe('/api/memorized', () => {
  it('requires a token', async () => {
    const res = await request(buildApp()).patch('/api/memorized').send({ flag: 'France' });
    expect(res.status).toBe(401);
    expect(User.updateOne).not.toHaveBeenCalled();
  });

  it('adds a flag to the user without duplicates', async () => {
    User.updateOne.mockResolvedValue({ modifiedCount: 1 });
    await request(buildApp())
      .patch('/api/memorized')
      .set('x-auth-token', tokenFor('user-1'))
      .send({ flag: 'France' })
      .expect(200);
    expect(User.updateOne).toHaveBeenCalledWith(
      { _id: 'user-1' },
      { $addToSet: { memorized_flags: 'France' } }
    );
  });

  it('removes a flag from the user', async () => {
    User.updateOne.mockResolvedValue({ modifiedCount: 1 });
    await request(buildApp())
      .delete('/api/memorized/France')
      .set('x-auth-token', tokenFor('user-1'))
      .expect(200);
    expect(User.updateOne).toHaveBeenCalledWith(
      { _id: 'user-1' },
      { $pull: { memorized_flags: 'France' } }
    );
  });
});
