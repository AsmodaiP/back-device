import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ButtonEntity } from 'src/button-device/button-device.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const getPostgresqlConfig = async (
  ConfigService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  autoLoadEntities: true,
  synchronize: true, 
  type: 'postgres',
  host: ConfigService.get('POSTGRES_HOST'),
  database: ConfigService.get('POSTGRES_DB'),
  port: ConfigService.get('PG_EXT_PORT'),
  username: ConfigService.get('PG_USER'),
  password: ConfigService.get('POSTGRES_PASSWORD'),
  entities: [ButtonEntity],
  migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
});
