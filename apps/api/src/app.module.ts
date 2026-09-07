import { Module } from '@nestjs/common';

import { DatabaseModule } from './common/database/database.module';
import { HealthModule } from './common/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { UsersModule } from './modules/users/users.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CustomerAccountsModule } from './modules/customer-accounts/customer-accounts.module';
import { CustomerAuthModule } from './modules/customer-auth/customer-auth.module';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    AuthModule,
    TenantsModule,
    UsersModule,
    CustomersModule,
    CustomerAccountsModule,
    CustomerAuthModule,
  ],
})
export class AppModule {}
