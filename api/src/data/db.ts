import { JSONFilePreset } from 'lowdb/node';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs'
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

const dbConfig = await initDB<DataConfig>('config.json', { config: {} })
const dbProjects = await initDB<DataProjects>('projects.json', { projects: [] })
const dbMessages = await initDB<DataMessages>('messages.json', { messages: [] })

export default {
  dbConfig,
  dbProjects,
  dbMessages
}