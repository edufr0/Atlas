import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { prisma, UserRole } from '@atlas/database';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(data: CreateUserDto) {
    const tenant = await prisma.tenant.findUnique({
      where: {
        id: data.tenantId,
      },
    });

    if (!tenant) {
      throw new NotFoundException(
        `Tenant with ID ${data.tenantId} not found`,
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        tenantId_email: {
          tenantId: data.tenantId,
          email: data.email,
        },
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'A user with this email already exists for this tenant',
      );
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        tenantId: data.tenantId,
        name: data.name,
        email: data.email,
        passwordHash,
        role: data.role ?? UserRole.OPERATOR,
      },
    });

    return this.sanitizeUser(user);
  }

  private sanitizeUser(user: {
    passwordHash: string;
    [key: string]: unknown;
  }) {
    const { passwordHash, ...safeUser } = user;

    return safeUser;
  }
}
