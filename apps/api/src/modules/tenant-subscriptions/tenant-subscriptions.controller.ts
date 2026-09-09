import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTenantSubscriptionDto } from './dto/create-tenant-subscription.dto';
import { TenantSubscriptionsService } from './tenant-subscriptions.service';

@Controller('tenant-subscriptions')
export class TenantSubscriptionsController {
  constructor(
    private readonly tenantSubscriptionsService:
      TenantSubscriptionsService,
  ) {}

  @Post()
  async create(
    @Body() data: CreateTenantSubscriptionDto,
  ) {
    return this.tenantSubscriptionsService.create(data);
  }

  @Get('tenant/:tenantId')
  async findByTenant(
    @Param('tenantId') tenantId: string,
  ) {
    return this.tenantSubscriptionsService.findByTenant(
      tenantId,
    );
  }

  @Patch(':tenantId/activate')
  async activate(
    @Param('tenantId') tenantId: string,
  ) {
    return this.tenantSubscriptionsService.activate(
      tenantId,
    );
  }

  @Patch(':tenantId/suspend')
  async suspend(
    @Param('tenantId') tenantId: string,
  ) {
    return this.tenantSubscriptionsService.suspend(
      tenantId,
    );
  }
}
