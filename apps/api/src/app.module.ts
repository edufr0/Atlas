import { Module } from '@nestjs/common';

import { DatabaseModule } from './common/database/database.module';
import { HealthModule } from './common/health/health.module';
import { TenantsModule } from './modules/tenants/tenants.module';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    TenantsModule,
  ],
})
export class AppModule {}
