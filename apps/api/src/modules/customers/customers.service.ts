import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { prisma, Prisma } from '@atlas/database';

import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  async create(
    user: AuthenticatedUser,
    data: CreateCustomerDto,
  ) {
    return prisma.customer.create({
      data: {
        tenantId: user.tenantId,

        name: data.name,
        document: data.document,
        email: data.email,
        phone: data.phone,
        address: data.address as Prisma.InputJsonValue | undefined,
      },
    });
  }

  async findAll(user: AuthenticatedUser) {
    return prisma.customer.findMany({
      where: {
        tenantId: user.tenantId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(
    user: AuthenticatedUser,
    customerId: string,
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

    return customer;
  }

  async update(
    user: AuthenticatedUser,
    customerId: string,
    data: UpdateCustomerDto,
  ) {
    await this.findOne(user, customerId);

    return prisma.customer.update({
      where: {
        id: customerId,
      },

      data: {
        name: data.name,
        document: data.document,
        email: data.email,
        phone: data.phone,
        address: data.address as Prisma.InputJsonValue | undefined,
      },
    });
  }

  async remove(
    user: AuthenticatedUser,
    customerId: string,
  ) {
    await this.findOne(user, customerId);

    return prisma.customer.delete({
      where: {
        id: customerId,
      },
    });
  }
}
