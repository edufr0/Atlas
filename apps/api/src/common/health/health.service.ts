import { Injectable } from '@nestjs/common';
import { prisma } from '@atlas/database';

@Injectable()
export class HealthService {
  async check() {
    try {
      await prisma.$queryRaw`SELECT 1`;

      return {
        status: 'ok',
        database: 'connected',
        timestamp: new Date().toISOString(),
      };
    } catch {
      return {
        status: 'error',
        database: 'disconnected',
        timestamp: new Date().toISOString(),
      };
    }
  }
}
