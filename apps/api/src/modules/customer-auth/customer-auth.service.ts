import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import {
  CustomerAccountStatus,
  CustomerStatus,
  TenantStatus,
  prisma,
} from '@atlas/database';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { CustomerLoginDto } from './dto/customer-login.dto';

@Injectable()
export class CustomerAuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async login(data: CustomerLoginDto) {
    const account = await prisma.customerAccount.findFirst({
      where: {
        email: data.email,
      },

      include: {
        customer: {
          include: {
            tenant: true,
          },
        },
      },
    });

    if (!account) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const passwordMatches = await bcrypt.compare(
      data.password,
      account.passwordHash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    if (
      account.status !==
      CustomerAccountStatus.ACTIVE
    ) {
      throw new UnauthorizedException(
        'Customer account is not active',
      );
    }

    if (
      account.customer.status !==
      CustomerStatus.ACTIVE
    ) {
      throw new UnauthorizedException(
        'Customer is not active',
      );
    }

    if (
      account.customer.tenant.status !==
      TenantStatus.ACTIVE
    ) {
      throw new UnauthorizedException(
        'Tenant is not active',
      );
    }

    const payload = {
      sub: account.id,
      accountId: account.id,
      customerId: account.customerId,
      tenantId: account.customer.tenantId,
      email: account.email,
      type: 'CUSTOMER',
    };

    const accessToken =
      await this.jwtService.signAsync(payload);

    await prisma.customerAccount.update({
      where: {
        id: account.id,
      },

      data: {
        lastLogin: new Date(),
      },
    });

    return {
      accessToken,

      customer: {
        id: account.customer.id,
        name: account.customer.name,
        email: account.customer.email,
      },

      tenant: {
        id: account.customer.tenant.id,
        name: account.customer.tenant.name,
      },
    };
  }
}
