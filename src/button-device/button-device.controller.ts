import { ButtonDeviceService } from './button-device.service';
import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

@Controller('button-device')
export class ButtonDeviceController {
  constructor(private readonly ButtonDeviceService: ButtonDeviceService) {}

  @Get('click/:id')
  async clickBtn(@Param('id') id: string) {
    return this.ButtonDeviceService.clickBtn(+id);
  }
}
