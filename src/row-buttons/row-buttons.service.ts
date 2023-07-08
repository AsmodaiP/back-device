import { ButtonDeviceService } from './../button-device/button-device.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RowEntity } from './row-buttons.entity';
import { Repository } from 'typeorm';
import { TypeButtons } from 'src/device/dto/create-section.dro';
import { ButtonEntity } from 'src/button-device/button-device.entity';

@Injectable()
export class RowButtonsService {
  constructor(
    @InjectRepository(RowEntity)
    private readonly RowRepository: Repository<RowEntity>,
    private readonly ButtonDeviceService: ButtonDeviceService,
  ) {}

  async createRow(row: TypeButtons[]) {
    const buttons: ButtonEntity[] = await Promise.all(
      row.map(
        async (button) => await this.ButtonDeviceService.createButton(button),
      ),
    );

    const newRow = await this.RowRepository.create({
      buttons: buttons,
    });

    return await this.RowRepository.save(newRow);
  }
}
