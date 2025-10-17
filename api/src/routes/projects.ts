import { FastifyInstance } from 'fastify';
import db from '../data/db.js';

const dbProjects = db.dbProjects;
const mainRoute = '/projects';

export default async function userRoutes(app: FastifyInstance) {
  app.get(mainRoute, async (req, reply) => {
    try {
      await dbProjects.read(); // leer versión más reciente
      return dbProjects.data?.projects || [];
    } catch (err) {
      console.error('❌ Error leyendo projects:', err)
      reply.status(500).send({ error: 'Error al leer proyectos' })
    }
  });
}