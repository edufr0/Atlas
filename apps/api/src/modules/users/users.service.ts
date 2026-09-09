import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import {
  prisma,
  UserRole,
} from '@atlas/database';

import * as bcrypt from 'bcrypt';

import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(
    currentUser: AuthenticatedUser,
    data: CreateUserDto,
  ) {
    this.ensureCanCreateUser(
      currentUser,
      data.role,
    );

    const existingUser = await prisma.user.findUnique({
      where: {
        tenantId_email: {
          tenantId: currentUser.tenantId,
          email: data.email,
        },
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'Já existe um usuário com este e-mail nesta empresa',
      );
    }

    const passwordHash = await bcrypt.hash(
      data.password,
      10,
    );

    const user = await prisma.user.create({
      data: {
        tenantId: currentUser.tenantId,
        name: data.name,
        email: data.email,
        passwordHash,
        role: data.role,
      },
    });

    return this.sanitizeUser(user);
  }

  private ensureCanCreateUser(
    currentUser: AuthenticatedUser,
    role: UserRole,
  ) {
    if (
      currentUser.role !== UserRole.OWNER &&
      currentUser.role !== UserRole.ADMIN
    ) {
      throw new ForbiddenException(
        'Você não possui permissão para criar usuários',
      );
    }

    if (
      currentUser.role === UserRole.ADMIN &&
      role === UserRole.OWNER
    ) {
      throw new ForbiddenException(
        'Um administrador não pode criar um OWNER',
      );
    }
  }

  private sanitizeUser(user: {
    passwordHash: string;
    [key: string]: unknown;
  }) {
    const { passwordHash, ...safeUser } = user;

    return safeUser;
  }
}
