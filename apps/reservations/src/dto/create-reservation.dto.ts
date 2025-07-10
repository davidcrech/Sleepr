import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CardDto } from '../../../../libs/common/src/dto/card.dto';
import { createChargeDto } from '@app/common';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  placeId: string;

  @IsString()
  @IsNotEmpty()
  invoiceId: string;

  card: CardDto;

  @IsNumber()
  amount: number;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => createChargeDto)
  charge: createChargeDto;
}
