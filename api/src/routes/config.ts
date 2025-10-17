import { FastifyInstance } from 'fastify';
import db from '../data/db.js';

const dbConfig = db.dbConfig;
const mainRoute = '/config';

export default async function userRoutes(app: FastifyInstance) {
  app.get(mainRoute, async () => {
    console.log('GET /config endpoint hit');
    await dbConfig.read();
    console.log('dbConfig.data: ', dbConfig.data);
    return dbConfig.data?.config || [];
  });
}