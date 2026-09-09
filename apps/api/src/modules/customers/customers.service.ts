import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  prisma,
  type Prisma,
  UserRole,
} from '@atlas/database';

import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { TenantSubscriptionsService } from '../tenant-subscriptions/tenant-subscriptions.service';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    private readonly tenantSubscriptionsService: TenantSubscriptionsService,
  ) {}

  async create(
    user: AuthenticatedUser,
    data: CreateCustomerDto,
  ) {
    await this.tenantSubscriptionsService.ensureCanCreateCustomer(
      user.tenantId,
    );

    const representativeId =
      user.role === UserRole.REPRESENTATIVE
        ? user.userId
        : undefined;

    return prisma.customer.create({
      data: {
        tenantId: user.tenantId,

        representativeId,

        name: data.name,
        document: data.document,
        email: data.email,
        phone: data.phone,

        address: data.address as Prisma.InputJsonValue,
      },
    });
  }

  async findAll(user: AuthenticatedUser) {
    const where: Prisma.CustomerWhereInput = {
      tenantId: user.tenantId,
    };

    if (user.role === UserRole.REPRESENTATIVE) {
      where.representativeId = user.userId;
    }

    return prisma.customer.findMany({
      where,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(
    user: AuthenticatedUser,
    customerId: string,
  ) {
    const where: Prisma.CustomerWhereInput = {
      id: customerId,
      tenantId: user.tenantId,
    };

    if (user.role === UserRole.REPRESENTATIVE) {
      where.representativeId = user.userId;
    }

    const customer = await prisma.customer.findFirst({
      where,
    });

    if (!customer) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return customer;
  }

  async update(
    user: AuthenticatedUser,
    customerId: string,
    data: UpdateCustomerDto,
  ) {
    const customer = await this.findOne(
      user,
      customerId,
    );

    if (
      user.role === UserRole.REPRESENTATIVE &&
      customer.representativeId !== user.userId
    ) {
      throw new ForbiddenException(
        'Você não tem permissão para alterar este cliente',
      );
    }

    return prisma.customer.update({
      where: {
        id: customerId,
      },

      data: {
        name: data.name,
        document: data.document,
        email: data.email,
        phone: data.phone,

        address: data.address as Prisma.InputJsonValue,

        status: data.status,
      },
    });
  }

  async remove(
    user: AuthenticatedUser,
    customerId: string,
  ) {
    const customer = await this.findOne(
      user,
      customerId,
    );

    if (
      user.role === UserRole.REPRESENTATIVE &&
      customer.representativeId !== user.userId
    ) {
      throw new ForbiddenException(
        'Você não tem permissão para excluir este cliente',
      );
    }

    return prisma.customer.delete({
      where: {
        id: customerId,
      },
    });
  }
}
