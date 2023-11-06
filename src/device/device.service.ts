import { SectionButtonsService } from './../section-buttons/section-buttons.service';
import {
  GatewayTimeoutException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceEntity } from './device.entity';
import { Repository } from 'typeorm';
import { CreateDevice } from './dto/create-device.dto';
import { SectionEntity } from 'src/section-buttons/section-buttons.entity';
import { CreateSectionButtonsDto } from './dto/create-section.dro';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(DeviceEntity)
    private readonly DeviceRepository: Repository<DeviceEntity>,
    private readonly SectionButtonsService: SectionButtonsService,
    private readonly HttpService: HttpService,
  ) {}

  async byId(id: number, convert: boolean = true) {
    const device = await this.DeviceRepository.findOne({
      where: { id },
      relations: { sections: { buttons: { buttons: true } } },
      order: {
        sections: {
          order: 'ASC',
          buttons: {
            order: 'ASC',
            buttons: {
              order: 'ASC',
            },
          },
        },
      },
    });

    if (!device) throw new NotFoundException('Прибор не найден!');

    return convert ? this.convertDevice(device) : device;
  }

  async getByToken(token: number) {
    // const device = await this.DeviceRepository.findOne({
    //   where: { token },
    // });
    const device = await this.byId(token);

    if (!device)
      throw new NotFoundException('Прибор по этому ключу не найден!');
    return { host: device.host, port: device.port };
  }

  async getAll() {
    const devices = await this.DeviceRepository.find({
      relations: { sections: { buttons: { buttons: true } } },
      order: {
        sections: {
          order: 'ASC',
          buttons: {
            order: 'ASC',
            buttons: {
              order: 'ASC',
            },
          },
        },
      },
    });
    return devices.length === 0
      ? []
      : devices.map((device) => this.convertDevice(device));
  }

  async createDevice(dto: CreateDevice) {
    const newDevice = await this.DeviceRepository.create({
      host: dto.host,
      name: dto.name,
      port: dto.port,
      sections: await this.setSectionDevice(dto.sections),
    });

    const saveButton = await this.DeviceRepository.save(newDevice);
    return this.convertDevice(saveButton);
  }

  async updateDevice(id: number, dto: CreateDevice) {
    const device = (await this.byId(id, false)) as DeviceEntity;

    await this.deleteSectionsDevice(device.sections);
    device.host = dto.host;
    device.name = dto.name;
    device.port = dto.port;
    device.sections = await this.setSectionDevice(dto.sections);

    const newDevice = await this.DeviceRepository.save(device);

    return this.convertDevice(newDevice);
  }

  async patchUpdateDevice(id: number, dto: UpdateDeviceDto) {
    const device = (await this.byId(id, false)) as DeviceEntity;

    if (dto.host) device.host = dto.host;
    if (dto.name) device.name = dto.name;

    const newDevice = await this.DeviceRepository.save(device);
    return this.convertDevice(newDevice);
  }

  async getButtons(host: string) {
    const url = `http://${host}/instrumentctrl/vnc/php/gettoolbar.php?mode=vertical`;

    return this.HttpService.get(url)
      .pipe(map((response) => response.data))
      .pipe(
        catchError((err: AxiosError) => {
          throw new GatewayTimeoutException(err.message);
        }),
      );
  }

  async deleteDevice(id: number) {
    const device = (await this.byId(id, false)) as DeviceEntity;
    return await this.DeviceRepository.delete(device.id);
  }

  private async setSectionDevice(sections: CreateSectionButtonsDto[]) {
    let newSections: SectionEntity[] | undefined;
    if (sections.length > 0) {
      newSections = await Promise.all(
        sections.map(
          async (section, index) =>
            await this.SectionButtonsService.createSection(section, index),
        ),
      );
    }

    return newSections ? newSections : [];
  }

  private async deleteSectionsDevice(sections: SectionEntity[]) {
    if (sections.length > 0) {
      await Promise.all(
        sections.map(
          async (section) =>
            await this.SectionButtonsService.deleteSection(section),
        ),
      );
    }
  }

  private convertDevice(device: DeviceEntity) {
    const convertSection = device.sections.map((section) => {
      return {
        id: section.id,
        buttons: section.buttons.map((row) =>
          row.buttons.map((button) => (button.isEmpty ? null : button)),
        ),
      };
    });

    return { ...device, sections: convertSection };
  }
}
