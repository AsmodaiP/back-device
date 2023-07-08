import {
  IsString,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { EnumStyleButton } from 'src/shared/types.shared';

@ValidatorConstraint({ name: 'IsButtons', async: false })
export class IsButtons implements ValidatorConstraintInterface {
  errors: string[] = [];
  validate(
    value: TypeButtons[][],
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    this.errors = [];

    value.forEach((row) => {
      if (row.length <= 1) {
        this.errors.push(`В строке ${row} меньше или равно одной кнопке!`);
      }

      row.forEach((button) => {
        if (button && typeof button === 'object') {
          if (typeof button.title !== 'string') {
            this.errors.push(
              `${button.title} не является строковым значением!`,
            );
          }
          if (typeof button.token !== 'string') {
            this.errors.push(
              `${button.token} не является строковым значением!`,
            );
          }
        } else {
          if (button !== null) {
            this.errors.push(`Не допустимое значение для ${button}`);
          }
        }
      });
    });

    return this.errors.length === 0;
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return this.errors.join('; ');
  }
}

export class CreateSectionButtonsDto {
  @Validate(IsButtons)
  buttons: TypeButtons[][];
}

export type TypeButtons = IButtonDevices | null;

export class IButtonDevices {
  @IsString()
  title: string;

  style?: EnumStyleButton;

  @IsString()
  token: string;
}
