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

@Controller('devices')
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
    return this.DeviceService.getByToken(+token);
  }

  @Get('getButtons/:host')
  async getButtons(@Param('host') host: string) {
    // return this.DeviceService.getButtons(host);
    return {
      ToolbarId: 'TBV',
      ToolbarTitle: '',
      ToolbarRows: '16',
      ToolbarColumns: '2',
      ToolbarWidth: '250',
      ToolbarHeight: '800',
      ToolbarBGColor: '#CCCCDD',
      ToolbarBGImage: '',
      ToolbarRegions: [
        {
          ToolbarRegionId: 'TBV-TBR0',
          ToolbarRegionRows: '2',
          ToolbarRegionColumns: '3',
          ToolbarRegionWidth: '-1',
          ToolbarRegionToolbarStartCell: '0,0',
          ToolbarRegionColspan: '2',
          ToolbarRegionRowspan: '2',
          ToolbarRegionBGColor: '#CCCCDD',
          Buttons: [
            {
              ToolbarButtonId: 'TBV-TBR0-TBB0',
              ToolbarButtonLabel: 'PRESET',
              ToolbarButtonLabelColor: '#000000',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#5CCA9D',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR0-TBB1',
              ToolbarButtonLabel: 'MODE',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR0-TBB2',
              ToolbarButtonLabel: 'SETUP',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR0-TBB3',
              ToolbarButtonLabel: 'PRINT',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR0-TBB4',
              ToolbarButtonLabel: 'FILE',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,2',
            },
          ],
        },
        {
          ToolbarRegionId: 'TBV-TBR1',
          ToolbarRegionRows: '3',
          ToolbarRegionColumns: '3',
          ToolbarRegionWidth: '-1',
          ToolbarRegionToolbarStartCell: '2,0',
          ToolbarRegionColspan: '2',
          ToolbarRegionRowspan: '3',
          ToolbarRegionBGColor: '#CCCCDD',
          Buttons: [
            {
              ToolbarButtonId: 'TBV-TBR1-TBB0',
              ToolbarButtonLabel: 'FREQ',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '11px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB1',
              ToolbarButtonLabel: 'SPAN',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '11px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB2',
              ToolbarButtonLabel: 'AMPT',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB3',
              ToolbarButtonLabel: 'BW',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB4',
              ToolbarButtonLabel: 'SWEEP',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB5',
              ToolbarButtonLabel: 'TRACE',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB6',
              ToolbarButtonLabel: 'MEAS',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB7',
              ToolbarButtonLabel: 'MEAS<br>CONFIG',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR1-TBB8',
              ToolbarButtonLabel: 'LINES',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,2',
            },
          ],
        },
        {
          ToolbarRegionId: 'TBV-TBR2',
          ToolbarRegionRows: '3',
          ToolbarRegionColumns: '2',
          ToolbarRegionWidth: '-1',
          ToolbarRegionToolbarStartCell: '5,0',
          ToolbarRegionColspan: '1',
          ToolbarRegionRowspan: '3',
          ToolbarRegionBGColor: '',
          Buttons: [
            {
              ToolbarButtonId: 'TBV-TBR2-TBB0',
              ToolbarButtonLabel: 'MKR',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR2-TBB1',
              ToolbarButtonLabel: 'MKR &rarr;',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR2-TBB2',
              ToolbarButtonLabel: 'TRIG',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR2-TBB3',
              ToolbarButtonLabel: 'PEAK<br>SEARCH',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR2-TBB4',
              ToolbarButtonLabel: 'RUN<br>SINGLE',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR2-TBB5',
              ToolbarButtonLabel: 'RUN<br>CONT',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,1',
            },
          ],
        },
        {
          ToolbarRegionId: 'TBV-TBR3',
          ToolbarRegionRows: '4',
          ToolbarRegionColumns: '4',
          ToolbarRegionWidth: '-1',
          ToolbarRegionToolbarStartCell: '8,0',
          ToolbarRegionColspan: '2',
          ToolbarRegionRowspan: '4',
          ToolbarRegionBGColor: '#CCCCDD',
          Buttons: [
            {
              ToolbarButtonId: 'TBV-TBR3-TBB0',
              ToolbarButtonLabel: '7',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB1',
              ToolbarButtonLabel: '8',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB2',
              ToolbarButtonLabel: '9',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB3',
              ToolbarButtonLabel: 'GHz &nbsp;s<br>-dBm V',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '11px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '0,3',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB4',
              ToolbarButtonLabel: '4',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB5',
              ToolbarButtonLabel: '5',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB6',
              ToolbarButtonLabel: '6',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB7',
              ToolbarButtonLabel: 'MHz ms<br>dBm mV',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '11px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '1,3',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB8',
              ToolbarButtonLabel: '1',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB9',
              ToolbarButtonLabel: '2',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB10',
              ToolbarButtonLabel: '3',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB11',
              ToolbarButtonLabel: 'kHz &mu;s<br>dB &nbsp;&mu;V',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '11px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '2,3',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB12',
              ToolbarButtonLabel: '0',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB13',
              ToolbarButtonLabel: '.',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB14',
              ToolbarButtonLabel: '-',
              ToolbarButtonLabelColor: '#222233',
              ToolbarButtonFontSize: '12px',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR3-TBB15',
              ToolbarButtonLabel: 'Hz &nbsp;ns<br>dB.. nV',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '11px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,3',
            },
          ],
        },
        {
          ToolbarRegionId: 'TBV-TBR4',
          ToolbarRegionRows: '4',
          ToolbarRegionColumns: '3',
          ToolbarRegionWidth: '-1',
          ToolbarRegionToolbarStartCell: '12,0',
          ToolbarRegionColspan: '2',
          ToolbarRegionRowspan: '4',
          ToolbarRegionBGColor: '#CCCCDD',
          Buttons: [
            {
              ToolbarButtonId: 'TBV-TBR4-TBB0',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '../images/FPL/arrowup.png',
              ToolbarButtonRegionCell: '0,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB1',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '../images/FPL/arrowleft.png',
              ToolbarButtonRegionCell: '1,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB2',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '../images/FPL/arrowdown.png',
              ToolbarButtonRegionCell: '1,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB3',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '../images/FPL/arrowright.png',
              ToolbarButtonRegionCell: '1,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB4',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '../images/FPL/dialleftweb.png',
              ToolbarButtonRegionCell: '2,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB5',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '../images/FPL/dialpushweb.png',
              ToolbarButtonRegionCell: '2,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB6',
              ToolbarButtonLabel: '',
              ToolbarButtonLabelColor: '',
              ToolbarButtonFontSize: '',
              ToolbarButtonBGColor: '#EBEBF4',
              ToolbarButtonBGImage: '../images/FPL/dialrightweb.png',
              ToolbarButtonRegionCell: '2,2',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB7',
              ToolbarButtonLabel: 'ESC',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,0',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB8',
              ToolbarButtonLabel: 'BACK',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,1',
            },
            {
              ToolbarButtonId: 'TBV-TBR4-TBB9',
              ToolbarButtonLabel: 'ENTER',
              ToolbarButtonLabelColor: '#FFFFFF',
              ToolbarButtonFontSize: '13px',
              ToolbarButtonBGColor: '#545465',
              ToolbarButtonBGImage: '',
              ToolbarButtonRegionCell: '3,2',
            },
          ],
        },
      ],
    };
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
