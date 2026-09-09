import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AtlasPlansService } from './atlas-plans.service';
import { CreateAtlasPlanDto } from './dto/create-atlas-plan.dto';
import { UpdateAtlasPlanDto } from './dto/update-atlas-plan.dto';

@Controller('atlas-plans')
export class AtlasPlansController {
  constructor(
    private readonly atlasPlansService: AtlasPlansService,
  ) {}

  @Post()
  async create(
    @Body() data: CreateAtlasPlanDto,
  ) {
    return this.atlasPlansService.create(data);
  }

  @Get()
  async findAll() {
    return this.atlasPlansService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ) {
    return this.atlasPlansService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAtlasPlanDto,
  ) {
    return this.atlasPlansService.update(
      id,
      data,
    );
  }

  @Patch(':id/activate')
  async activate(
    @Param('id') id: string,
  ) {
    return this.atlasPlansService.activate(id);
  }

  @Patch(':id/deactivate')
  async deactivate(
    @Param('id') id: string,
  ) {
    return this.atlasPlansService.deactivate(id);
  }
}
