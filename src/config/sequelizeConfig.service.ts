import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    // const {} = this.configService.get('database');

    return {
      dialect: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT) || 5435,
      username: process.env.DATABASE_USER || 'admin',
      password: process.env.DATABASE_PASSWORD || 'admin',
      database: process.env.DATABASE_NAME || 'shop',
      synchronize: true,
      autoLoadModels: true,
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    };
  }
}
