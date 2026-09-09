import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { prisma } from '@atlas/database';
import * as bcrypt from 'bcrypt';

import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CreateCustomerAccountDto } from './dto/create-customer-account.dto';

@Injectable()
export class CustomerAccountsService {
  async create(
    user: AuthenticatedUser,
    customerId: string,
    data: CreateCustomerAccountDto,
  ) {
    const customer = await prisma.customer.findFirst({
      where: {
        id: customerId,
        tenantId: user.tenantId,
      },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    const existingAccount =
      await prisma.customerAccount.findUnique({
        where: {
          customerId,
        },
      });

    if (existingAccount) {
      throw new ConflictException(
        'This customer already has an account',
      );
    }

    const existingEmail =
      await prisma.customerAccount.findFirst({
        where: {
          tenantId: user.tenantId,
          email: data.email,
        },
      });

    if (existingEmail) {
      throw new ConflictException(
        'This email is already being used by another customer account',
      );
    }

    const passwordHash = await bcrypt.hash(
      data.password,
      10,
    );

    return prisma.customerAccount.create({
      data: {
        tenantId: user.tenantId,
        customerId,
        email: data.email,
        passwordHash,
      },

      select: {
        id: true,
        tenantId: true,
        customerId: true,
        email: true,
        status: true,
        lastLogin: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
