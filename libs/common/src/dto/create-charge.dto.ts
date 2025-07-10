import Stripe from 'stripe';
import { CardDto } from './card.dto';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class createChargeDto {
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  card: CardDto;

  @IsNumber()
  amount: number;
}
