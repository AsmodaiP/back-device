import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ButtonEntity } from './button-device.entity';
import { Repository } from 'typeorm';
import { UpdateButtonDto } from './Dto/update-button.dto';
import { CreateButtonDto } from './Dto/create-button.dto';
import { TypeButtons } from 'src/device/dto/create-section.dro';

@Injectable()
export class ButtonDeviceService {
  constructor(
    @InjectRepository(ButtonEntity)
    private readonly buttonRepository: Repository<ButtonEntity>,
  ) {}

  //   async byId(id: number) {
  //     const button = await this.buttonRepository.findOne({ where: { id } });

  //     if (!button) throw new NotFoundException('Кнопка не найдена!');
  //     return button;
  //   }

    // async updateButton(id: number, dto: TypeButtons) {
    //   const button = await this.byId(id);

    //   button.style = dto.style;
    //   button.title = dto.title;
    //   button.token = dto.token;

    //   return await this.buttonRepository.save(button);
    // }

  async createButton(button: TypeButtons) {
    const newButton = await this.buttonRepository.create({
      title: button?.title ? button.title : '',
      style: button?.style,
      isEmpty: button ? false : true,
      token: button?.token ? button.token : '',
    });

    const btn = await this.buttonRepository.save(newButton);
    return btn;
  }

  //   async deleteButton(id) {
  //     const button = await this.byId(id);
  //     return await this.buttonRepository.delete(button);
  //   }

  //   async getProxyRequest(device_token: string, btn_id: number) {}

  //   async getUrl(token, btn_id) {
  //     const button = await this.byId(btn_id);
  //     //getDevice
  //   }
}
