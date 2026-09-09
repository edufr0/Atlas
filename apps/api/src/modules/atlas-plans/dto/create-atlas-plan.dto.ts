import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

import { BillingCycle } from '@atlas/database';

export class CreateAtlasPlanDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber(
    {
      maxDecimalPlaces: 2,
    },
  )
  @Min(0)
  price: number;

  @IsOptional()
  @IsEnum(BillingCycle)
  billingCycle?: BillingCycle;

  @IsInt()
  @IsPositive()
  maxCustomers: number;

  @IsOptional()
  @IsObject()
  features?: Record<string, unknown>;
}
