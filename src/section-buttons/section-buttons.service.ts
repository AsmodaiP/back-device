import { RowButtonsService } from './../row-buttons/row-buttons.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectionEntity } from './section-buttons.entity';
import { Repository } from 'typeorm';
import { CreateSectionButtonsDto } from 'src/device/dto/create-section.dro';
import { RowEntity } from 'src/row-buttons/row-buttons.entity';

@Injectable()
export class SectionButtonsService {
  constructor(
    @InjectRepository(SectionEntity)
    private readonly SectionRepository: Repository<SectionEntity>,
    private readonly RowButtonsService: RowButtonsService,
  ) {}

  async createSection(section: CreateSectionButtonsDto, order: number) {
    const rows: RowEntity[] = await Promise.all(
      section.buttons.map(
        async (row, index) => await this.RowButtonsService.createRow(row, index),
      ),
    );

    const newSection = await this.SectionRepository.create({
      buttons: rows,
      order,
    });

    return await this.SectionRepository.save(newSection);
  }

  async deleteSection(section: SectionEntity) {
    return await this.SectionRepository.delete(section.id);
  }
}
