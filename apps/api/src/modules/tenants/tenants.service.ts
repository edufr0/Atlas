import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '@atlas/database';

import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantsService {
  async create(data: CreateTenantDto) {
    return prisma.tenant.create({
      data: {
        name: data.name,
        legalName: data.legalName,
        document: data.document,
        email: data.email,
        phone: data.phone,
      },
    });
  }

  async findAll() {
    return prisma.tenant.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const tenant = await prisma.tenant.findUnique({
      where: {
        id,
      },
    });

    if (!tenant) {
      throw new NotFoundException(
        `Tenant with ID ${id} not found`,
      );
    }

    return tenant;
  }

  async update(id: string, data: UpdateTenantDto) {
    await this.findOne(id);

    return prisma.tenant.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return prisma.tenant.delete({
      where: {
        id,
      },
    });
  }
}
