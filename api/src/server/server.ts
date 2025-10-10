import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

const app = Fastify();

// Middlewares
app.register(cors, {
  origin: '*', // Allow all origins
});
app.register(helmet);

export default app;