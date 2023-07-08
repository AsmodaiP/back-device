import { CreateButtonDto } from './Dto/create-button.dto';
import { UpdateButtonDto } from './Dto/update-button.dto';

import { ButtonDeviceService } from './button-device.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('button-device')
export class ButtonDeviceController {
  constructor(private readonly ButtonDeviceService: ButtonDeviceService) {}

// //   @Get('by-id/:id')
// //   async getButton(@Param('id') id: string) {
// //     return this.ButtonDeviceService.byId(+id);
// //   }

// //   @UsePipes(new ValidationPipe())
// //   @HttpCode(200)
// //   @Put(':id')
// //   async updateButton(@Param('id') id: string, @Body() dto: UpdateButtonDto) {
// //     return this.ButtonDeviceService.updateButton(+id, dto);
// //   }

//   @HttpCode(200)
//   @Delete(':id')
//   async deleteButton(@Param('id') id: string) {
//     return this.ButtonDeviceService.deleteButton(+id);
//   }

//   @UsePipes(new ValidationPipe())
//   @HttpCode(200)
//   @Post()
//   async createButton(@Body() dto: CreateButtonDto) {
//     return this.ButtonDeviceService.createButton(dto);
//   }
}
