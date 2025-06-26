// server.js
const Fastify = require('fastify');
const jwt = require('@fastify/jwt');
const cookie = require('@fastify/cookie');
const cors = require('@fastify/cors');

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: 'http://localhost:3000', // Next.js client origin
  credentials: true,
});

fastify.register(cookie);
fastify.register(jwt, {
  secret: 'supersecretkey',
  cookie: {
    cookieName: 'token',
    signed: false
  }
});

// Dummy user
const user = { id: 1, username: 'test', password: 'pass' };

fastify.post('/api/login', async (req, reply) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = fastify.jwt.sign({ id: user.id, username: user.username });
    reply
      .setCookie('token', token, {
        httpOnly: true,
        path: '/',
        secure: false, // true in production
        sameSite: 'lax',
        maxAge: 3600,
      })
      .send({ success: true });
  } else {
    reply.code(401).send({ error: 'Invalid credentials' });
  }
});

fastify.get('/api/me', async (req, reply) => {
  try {
    const token = req.cookies.token;
    const decoded = fastify.jwt.verify(token);
    reply.send({ user: decoded });
  } catch (err) {
    reply.code(401).send({ error: 'Unauthorized' });
  }
});

fastify.listen({ port: 4000 });
