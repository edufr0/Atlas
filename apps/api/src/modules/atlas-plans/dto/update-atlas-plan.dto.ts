import {
  IsEnum,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

import { BillingCycle } from '@atlas/database';

export class UpdateAtlasPlanDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber(
    {
      maxDecimalPlaces: 2,
    },
  )
  @Min(0)
  price?: number;

  @IsOptional()
  @IsEnum(BillingCycle)
  billingCycle?: BillingCycle;

  @IsOptional()
  @IsInt()
  @IsPositive()
  maxCustomers?: number;

  @IsOptional()
  @IsObject()
  features?: Record<string, unknown>;
}
