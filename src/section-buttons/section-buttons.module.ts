import { Module } from '@nestjs/common';
import { SectionButtonsController } from './section-buttons.controller';
import { SectionButtonsService } from './section-buttons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceEntity } from 'src/device/device.entity';
import { RowEntity } from 'src/row-buttons/row-buttons.entity';
import { SectionEntity } from './section-buttons.entity';
import { RowButtonsModule } from 'src/row-buttons/row-buttons.module';

@Module({
  controllers: [SectionButtonsController],
  providers: [SectionButtonsService],
  imports: [
    TypeOrmModule.forFeature([DeviceEntity, RowEntity, SectionEntity]),
    RowButtonsModule,
  ],
  exports: [SectionButtonsService],
})
export class SectionButtonsModule {}
