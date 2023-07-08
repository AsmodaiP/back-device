import { IsOptional, IsString, Validate } from 'class-validator';
import { HasIpConstraint } from './create-device.dto';

export class UpdateDeviceDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  token: string;

  @IsOptional()
  @Validate(HasIpConstraint)
  host: string;
}
