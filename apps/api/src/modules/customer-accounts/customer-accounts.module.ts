import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { CustomerAccountsController } from './customer-accounts.controller';
import { CustomerAccountsService } from './customer-accounts.service';

@Module({
  imports: [
    AuthModule,
  ],

  controllers: [
    CustomerAccountsController,
  ],

  providers: [
    CustomerAccountsService,
  ],

  exports: [
    CustomerAccountsService,
  ],
})
export class CustomerAccountsModule {}
