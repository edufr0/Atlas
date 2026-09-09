import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { TenantSubscriptionsModule } from '../tenant-subscriptions/tenant-subscriptions.module';

import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [
    AuthModule,
    TenantSubscriptionsModule,
  ],

  controllers: [
    CustomersController,
  ],

  providers: [
    CustomersService,
  ],
})
export class CustomersModule {}
