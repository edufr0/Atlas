import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';

import {
  TenantSubscriptionStatus,
} from '@atlas/database';

export class CreateTenantSubscriptionDto {
  @IsUUID()
  tenantId: string;

  @IsUUID()
  atlasPlanId: string;

  @IsOptional()
  @IsEnum(TenantSubscriptionStatus)
  status?: TenantSubscriptionStatus;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
