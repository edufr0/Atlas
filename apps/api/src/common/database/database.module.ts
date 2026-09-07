import { Global, Module } from '@nestjs/common';
import { prisma } from '@atlas/database';

@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE',
      useValue: prisma,
    },
  ],
  exports: ['DATABASE'],
})
export class DatabaseModule {}
