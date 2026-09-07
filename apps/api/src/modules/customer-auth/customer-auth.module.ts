import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CustomerAuthController } from './customer-auth.controller';
import { CustomerAuthService } from './customer-auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret:
        process.env.JWT_SECRET ||
        'atlas-development-secret-change-in-production',

      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],

  controllers: [
    CustomerAuthController,
  ],

  providers: [
    CustomerAuthService,
  ],

  exports: [
    CustomerAuthService,
  ],
})
export class CustomerAuthModule {}
