import { Module } from '@nestjs/common';
import { ButtonDeviceController } from './button-device.controller';
import { ButtonDeviceService } from './button-device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonEntity } from './button-device.entity';

@Module({
  controllers: [ButtonDeviceController],
  providers: [ButtonDeviceService],
  imports: [TypeOrmModule.forFeature([ButtonEntity])],
  exports: [ButtonDeviceService],
})
export class ButtonDeviceModule {}
