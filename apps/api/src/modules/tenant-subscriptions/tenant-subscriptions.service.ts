import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  prisma,
  CustomerStatus,
  TenantSubscriptionStatus,
} from '@atlas/database';

import { CreateTenantSubscriptionDto } from './dto/create-tenant-subscription.dto';

@Injectable()
export class TenantSubscriptionsService {
  async create(
    data: CreateTenantSubscriptionDto,
  ) {
    const tenant =
      await prisma.tenant.findUnique({
        where: {
          id: data.tenantId,
        },
      });

    if (!tenant) {
      throw new NotFoundException(
        'Tenant not found',
      );
    }

    const atlasPlan =
      await prisma.atlasPlan.findUnique({
        where: {
          id: data.atlasPlanId,
        },
      });

    if (!atlasPlan) {
      throw new NotFoundException(
        'Atlas plan not found',
      );
    }

    const existingSubscription =
      await prisma.tenantSubscription.findUnique({
        where: {
          tenantId: data.tenantId,
        },
      });

    if (existingSubscription) {
      throw new ConflictException(
        'Tenant already has a subscription',
      );
    }

    return prisma.tenantSubscription.create({
      data: {
        tenantId: data.tenantId,
        atlasPlanId: data.atlasPlanId,
        status:
          data.status ??
          TenantSubscriptionStatus.ACTIVE,
        dueDate: data.dueDate
          ? new Date(data.dueDate)
          : null,
      },

      include: {
        atlasPlan: true,
      },
    });
  }

  async findByTenant(
    tenantId: string,
  ) {
    const subscription =
      await prisma.tenantSubscription.findUnique({
        where: {
          tenantId,
        },

        include: {
          atlasPlan: true,
        },
      });

    if (!subscription) {
      throw new NotFoundException(
        'Tenant subscription not found',
      );
    }

    return subscription;
  }

  async activate(
    tenantId: string,
  ) {
    await this.findByTenant(tenantId);

    return prisma.tenantSubscription.update({
      where: {
        tenantId,
      },

      data: {
        status:
          TenantSubscriptionStatus.ACTIVE,
      },

      include: {
        atlasPlan: true,
      },
    });
  }

  async suspend(
    tenantId: string,
  ) {
    await this.findByTenant(tenantId);

    return prisma.tenantSubscription.update({
      where: {
        tenantId,
      },

      data: {
        status:
          TenantSubscriptionStatus.SUSPENDED,
      },

      include: {
        atlasPlan: true,
      },
    });
  }

  async ensureCanCreateCustomer(
    tenantId: string,
  ): Promise<void> {
    const subscription =
      await prisma.tenantSubscription.findUnique({
        where: {
          tenantId,
        },

        include: {
          atlasPlan: true,
        },
      });

    if (!subscription) {
      throw new ForbiddenException(
        'Tenant does not have an active subscription',
      );
    }

    if (
      subscription.status !==
      TenantSubscriptionStatus.ACTIVE
    ) {
      throw new ForbiddenException(
        'Tenant subscription is not active',
      );
    }

    if (
      subscription.dueDate &&
      subscription.dueDate < new Date()
    ) {
      throw new ForbiddenException(
        'Tenant subscription has expired',
      );
    }

    const customersCount =
      await prisma.customer.count({
        where: {
          tenantId,

          status: {
            not: CustomerStatus.CANCELLED,
          },
        },
      });

    if (
      customersCount >=
      subscription.atlasPlan.maxCustomers
    ) {
      throw new ForbiddenException(
        `Customer limit reached. Your plan allows up to ${subscription.atlasPlan.maxCustomers} customers.`,
      );
    }
  }
}
