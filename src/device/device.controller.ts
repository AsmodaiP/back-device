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
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateDevice } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

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

  @Get('getByToken/:token')
  async getByToken(@Param('token') token: string) {
    return this.DeviceService.getByToken(token);
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

  @HttpCode(200)
  @Delete(':id')
  async deleteDevice(@Param('id') id: string) {
    return this.DeviceService.deleteDevice(+id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch(':id')
  async patchUpdateDevice(
    @Param('id') id: string,
    @Body() dto: UpdateDeviceDto,
  ) {
    return this.DeviceService.patchUpdateDevice(+id, dto);
  }
}
