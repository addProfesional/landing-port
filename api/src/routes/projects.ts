import { FastifyInstance } from 'fastify';
import db from '../data/db.js';

const dbProjects = db.dbProjects;
const mainRoute = '/projects';

export default async function userRoutes(app: FastifyInstance) {
  app.get(mainRoute, async () => {
    console.log('GET /projects endpoint hit');
    await dbProjects.read();
    console.log('dbProjects.data: ', dbProjects.data);
    return dbProjects.data?.projects || [];
  });
}