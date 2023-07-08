import { IsString, IsEnum, IsBoolean } from 'class-validator';
import { EnumStyleButton } from 'src/shared/types.shared';

export class CreateButtonDto {
  @IsString()
  title: string;

  @IsString()
  token: string;

  @IsBoolean()
  isEmpty: boolean;

  style?: EnumStyleButton;
}
