import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  prisma,
  AtlasPlanStatus,
  BillingCycle,
  Prisma,
} from '@atlas/database';

import { CreateAtlasPlanDto } from './dto/create-atlas-plan.dto';
import { UpdateAtlasPlanDto } from './dto/update-atlas-plan.dto';

@Injectable()
export class AtlasPlansService {
  async create(
    data: CreateAtlasPlanDto,
  ) {
    return prisma.atlasPlan.create({
      data: {
        name: data.name,
        description: data.description,
        price: new Prisma.Decimal(data.price),
        billingCycle:
          data.billingCycle ?? BillingCycle.MONTHLY,
        maxCustomers: data.maxCustomers,
        features: data.features as Prisma.InputJsonValue | undefined,
      },
    });
  }

  async findAll() {
    return prisma.atlasPlan.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const plan =
      await prisma.atlasPlan.findUnique({
        where: {
          id,
        },
      });

    if (!plan) {
      throw new NotFoundException(
        'Atlas plan not found',
      );
    }

    return plan;
  }

  async update(
    id: string,
    data: UpdateAtlasPlanDto,
  ) {
    await this.findOne(id);

    return prisma.atlasPlan.update({
      where: {
        id,
      },

      data: {
        name: data.name,
        description: data.description,
        price:
          data.price !== undefined
            ? new Prisma.Decimal(data.price)
            : undefined,
        billingCycle: data.billingCycle,
        maxCustomers: data.maxCustomers,
        features:
          data.features !== undefined
            ? (data.features as Prisma.InputJsonValue)
            : undefined,
      },
    });
  }

  async activate(id: string) {
    await this.findOne(id);

    return prisma.atlasPlan.update({
      where: {
        id,
      },

      data: {
        status: AtlasPlanStatus.ACTIVE,
      },
    });
  }

  async deactivate(id: string) {
    await this.findOne(id);

    return prisma.atlasPlan.update({
      where: {
        id,
      },

      data: {
        status: AtlasPlanStatus.INACTIVE,
      },
    });
  }
}
