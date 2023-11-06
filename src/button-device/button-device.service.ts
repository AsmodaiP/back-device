import {
  GatewayTimeoutException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ButtonEntity } from './button-device.entity';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { TypeButtons } from 'src/device/dto/create-section.dro';
import { catchError, map } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ButtonDeviceService {
  constructor(
    @InjectRepository(ButtonEntity)
    private readonly buttonRepository: Repository<ButtonEntity>,
    private readonly HttpService: HttpService,
  ) {}

  async createButton(button: TypeButtons, order: number) {
    const newButton = await this.buttonRepository.create({
      title: button?.title ? button.title : '',
      style: button?.style,
      isEmpty: button ? false : true,
      token: button?.token ? button.token : '',
      order,
    });

    const btn = await this.buttonRepository.save(newButton);
    return btn;
  }

  async byId(id: number, relations = false) {
    const button = await this.buttonRepository.findOne({
      where: { id },
      relations: relations ? { row: { section: { device: true } } } : {},
    });

    if (!button) throw new NotFoundException('Кнопка не найдена!');
    return button;
  }

  async clickBtn(id: number) {
    const btn = await this.byId(id, true);
    const url = this.getUrl(btn);

    return this.HttpService.get(url)
      .pipe(map((response) => response.data))
      .pipe(
        catchError((err: AxiosError) => {
          throw new GatewayTimeoutException(err.message);
        }),
      );
  }

  getUrl(button: ButtonEntity) {
    const hostDevice = button.row.section.device.host;
    const buttonToken = button.token;

    return `http://${hostDevice}/instrumentctrl/vnc/php/sethardkeyaction.php?ID=${buttonToken}`;
  }
}
