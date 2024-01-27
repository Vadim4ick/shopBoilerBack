import { registerAs } from '@nestjs/config';

export const psqlConfig = registerAs('databse', () => ({
  dialect: process.env.DIALECT,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5435,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadingEntities: true,
  synchronize: true,
}));
