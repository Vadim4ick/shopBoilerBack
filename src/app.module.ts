import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';

@Module({
  imports: [
    // SequelizeModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useClass: SequelizeConfigService,
    // }),
    // ConfigModule.forRoot({
    //   load: [databaseConfig],
    // }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'db',
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
