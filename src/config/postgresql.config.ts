import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ButtonEntity } from 'src/button-device/button-device.entity';

export const getPostgresqlConfig = async (
  ConfigService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  autoLoadEntities: true,
  synchronize: true, 
  type: 'postgres',
  host: ConfigService.get('POSTGRES_HOST'),
  database: ConfigService.get('NAME_DATABASE'),
  port: ConfigService.get('PORT_DATABASE'),
  username: ConfigService.get('USER_NAME_DATABASE'),
  password: ConfigService.get('POSTGRES_PASSWORD'),
  entities: [ButtonEntity],
  migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
});
