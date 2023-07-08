import { Module } from '@nestjs/common';
import { RowButtonsController } from './row-buttons.controller';
import { RowButtonsService } from './row-buttons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonEntity } from 'src/button-device/button-device.entity';
import { SectionEntity } from 'src/section-buttons/section-buttons.entity';
import { ButtonDeviceModule } from 'src/button-device/button-device.module';
import { RowEntity } from './row-buttons.entity';

@Module({
  controllers: [RowButtonsController],
  providers: [RowButtonsService],
  imports: [
    TypeOrmModule.forFeature([ButtonEntity, SectionEntity, RowEntity]),
    ButtonDeviceModule,
  ],
  exports: [RowButtonsService],
})
export class RowButtonsModule {}
