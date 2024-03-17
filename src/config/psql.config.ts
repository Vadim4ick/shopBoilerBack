import { registerAs } from '@nestjs/config';

export const psqlConfig = registerAs('databse', () => ({
  dialect: process.env.DIALECT || 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5435,
  username: process.env.DATABASE_USER || 'admin',
  password: process.env.DATABASE_PASSWORD || 'admin',
  database: process.env.DATABASE_NAME || 'shop',
  autoLoadingEntities: true,
  synchronize: true,
}));
