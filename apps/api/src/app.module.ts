import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './common/database/database.module';
import { HealthModule } from './common/health/health.module';

import { AuthModule } from './modules/auth/auth.module';
import { CustomerAccountsModule } from './modules/customer-accounts/customer-accounts.module';
import { CustomerAuthModule } from './modules/customer-auth/customer-auth.module';
import { CustomersModule } from './modules/customers/customers.module';
import { TenantSubscriptionsModule } from './modules/tenant-subscriptions/tenant-subscriptions.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { UsersModule } from './modules/users/users.module';
import { AtlasPlansModule } from './modules/atlas-plans/atlas-plans.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    DatabaseModule,
    HealthModule,

    AuthModule,

    TenantsModule,
    UsersModule,
    CustomersModule,
    CustomerAccountsModule,
    CustomerAuthModule,
    TenantSubscriptionsModule,
    AtlasPlansModule,
  ],
})
export class AppModule {}
