import { Module } from '@nestjs/common';

import { TenantSubscriptionsController } from './tenant-subscriptions.controller';
import { TenantSubscriptionsService } from './tenant-subscriptions.service';

@Module({
  controllers: [
    TenantSubscriptionsController,
  ],

  providers: [
    TenantSubscriptionsService,
  ],

  exports: [
    TenantSubscriptionsService,
  ],
})
export class TenantSubscriptionsModule {}
