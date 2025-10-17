import { JSONFilePreset } from 'lowdb/node';
import { join } from 'node:path';
import { Config } from '../models/Config.js';

type DataConfig = {
  config: Config | {}
};

const fileConfig = join(process.cwd(), 'db/config.json');

const dbConfig = await JSONFilePreset<DataConfig>(fileConfig, { config: {} });

export default {
  dbConfig
}