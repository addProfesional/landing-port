import { FastifyInstance } from 'fastify';
import db from '../data/db.js';

const dbMessages = db.dbMessages;
const mainRoute = '/messages';

export default async function userRoutes(app: FastifyInstance) {
  app.get(mainRoute, async () => {
    console.log('GET /messages endpoint hit');
    await dbMessages.read();
    console.log('dbMessages.data: ', dbMessages.data);
    return dbMessages.data?.messages || [];
  });
}