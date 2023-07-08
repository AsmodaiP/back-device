import { IsString, IsEnum } from 'class-validator';
import { EnumStyleButton } from 'src/shared/types.shared';

export class UpdateButtonDto {
  @IsString()
  title: string;

  @IsString()
  token: string;

  @IsEnum(EnumStyleButton)
  style: EnumStyleButton;
}
