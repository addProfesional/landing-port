import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

//Routes
import rootRoutes from '../routes/root.js';
import configRoutes from '../routes/config.js';
import messagesRoutes from '../routes/messages.js';
import projectRoutes from '../routes/projects.js';

const app = Fastify();

// Middlewares
app.register(cors, {
  origin: '*', // Allow all origins
});
app.register(helmet);

//Register routes
app.register(rootRoutes);
app.register(configRoutes);
app.register(messagesRoutes);
app.register(projectRoutes);

export default app;