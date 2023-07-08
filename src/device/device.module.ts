import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionEntity } from 'src/section-buttons/section-buttons.entity';
import { DeviceEntity } from './device.entity';
import { SectionButtonsModule } from 'src/section-buttons/section-buttons.module';

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  imports: [
    TypeOrmModule.forFeature([SectionEntity, DeviceEntity]),
    SectionButtonsModule,
  ],
})
export class DeviceModule {}
