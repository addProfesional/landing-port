import { FastifyInstance } from 'fastify';

export default async function rootRoutes(app: FastifyInstance) {

  app.get('/', async () => {
    return { msg: 'Backend funcionando con TS + ESM 🚀' };
  });
  
}