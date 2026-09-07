import { Injectable } from '@nestjs/common';
import { prisma } from '@atlas/database';
import { CreateTenantDto } from './dto/create-tenant.dto';

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
    return prisma.tenant.findUnique({
      where: {
        id,
      },
    });
  }
}
