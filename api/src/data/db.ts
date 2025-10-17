import { JSONFilePreset } from 'lowdb/node';
import { join } from 'node:path';
import { Config } from '../models/Config.js';
import { Project } from '../models/Project.js';
import { Message } from '../models/Message.js';

type DataConfig = {
  config: Config | {}
};

type DataProjects = {
  projects : Project[]
}

type DataMessages = {
  messages : Message[]
}

const fileConfig = join(process.cwd(), 'db/config.json');
const dbConfig = await JSONFilePreset<DataConfig>(fileConfig, { config: {} });

const fileProjects = join(process.cwd(), 'db/projects.json');
const dbProjects = await JSONFilePreset<DataProjects>(fileProjects, { projects: [] });

const fileMessages = join(process.cwd(), 'db/messages.json');
const dbMessages = await JSONFilePreset<DataMessages>(fileMessages, { messages: [] });

export default {
  dbConfig,
  dbProjects,
  dbMessages
}

/*
Mejorar con este código:
async function initDB<T>(filename: string, defaultData: T) {
  try {
    const dir = join(process.cwd(), 'db')
    mkdirSync(dir, { recursive: true }) // crea carpeta si no existe

    const filePath = join(dir, filename)
    const db = await JSONFilePreset<T>(filePath, defaultData)

    console.log(`✅ Base de datos cargada: ${filename}`)
    return db
  } catch (error) {
    console.error(`❌ Error cargando ${filename}:`, error)
    throw new Error(`No se pudo inicializar ${filename}`)
  }
}

export const dbConfig = await initDB<DataConfig>('config.json', { config: {} })
export const dbProjects = await initDB<DataProjects>('projects.json', { projects: [] })
export const dbMessages = await initDB<DataMessages>('messages.json', { messages: [] })

export default { dbConfig, dbProjects, dbMessages }
*/