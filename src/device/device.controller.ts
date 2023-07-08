import { DeviceService } from './device.service';
import {
  Controller,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Post,
  Body,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { CreateDevice } from './dto/create-device.dto';

@Controller('device')
export class DeviceController {
  constructor(private readonly DeviceService: DeviceService) {}

  @Get()
  async getAll() {
    return this.DeviceService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.DeviceService.byId(+id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  async createDevice(@Body() dto: CreateDevice) {
    return this.DeviceService.createDevice(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  async updateDevice(@Param('id') id: string, @Body() dto: CreateDevice) {
    return this.DeviceService.updateDevice(+id, dto);
  }
}
