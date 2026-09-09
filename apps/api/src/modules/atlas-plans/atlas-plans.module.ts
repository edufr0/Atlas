import { Module } from '@nestjs/common';

import { AtlasPlansController } from './atlas-plans.controller';
import { AtlasPlansService } from './atlas-plans.service';

@Module({
  controllers: [
    AtlasPlansController,
  ],

  providers: [
    AtlasPlansService,
  ],

  exports: [
    AtlasPlansService,
  ],
})
export class AtlasPlansModule {}
