import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import {
  prisma,
  TenantStatus,
  UserStatus,
} from '@atlas/database';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    const user = await prisma.user.findUnique({
      where: {
        tenantId_email: {
          tenantId: data.tenantId,
          email: data.email,
        },
      },

      include: {
        tenant: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const passwordMatches = await bcrypt.compare(
      data.password,
      user.passwordHash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException(
        'User is not active',
      );
    }

    if (user.tenant.status !== TenantStatus.ACTIVE) {
      throw new UnauthorizedException(
        'Tenant is not active',
      );
    }

    const payload = {
      sub: user.id,
      tenantId: user.tenantId,
      email: user.email,
      role: user.role,
      type: 'USER',
    };

    const accessToken =
      await this.jwtService.signAsync(payload);

    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        lastLogin: new Date(),
      },
    });

    return {
      accessToken,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      tenant: {
        id: user.tenant.id,
        name: user.tenant.name,
      },
    };
  }
}
