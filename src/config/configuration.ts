import { registerAs } from '@nestjs/config';
import { psqlConfig } from './psql.config';

export const databaseConfig = registerAs('database', () => ({
  psql: {
    ...psqlConfig(),
  },
}));
