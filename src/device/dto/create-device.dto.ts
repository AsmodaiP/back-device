import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsString,
  Validate,
  ValidateNested,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CreateSectionButtonsDto } from './create-section.dro';
import { regIPv4 } from 'src/shared/validate/ip.validate';

@ValidatorConstraint()
export class HasIpConstraint implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return regIPv4.test(value);
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'host не является ip';
  }
}

export class CreateDevice {
  @IsString()
  name: string;

  @Validate(HasIpConstraint)
  host: string;

  @IsNumber()
  port: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSectionButtonsDto)
  sections: CreateSectionButtonsDto[];
}
