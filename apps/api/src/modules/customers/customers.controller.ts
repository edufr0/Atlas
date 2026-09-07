import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@UseGuards(JwtAuthGuard)
@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
  ) {}

  @Post()
  async create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() data: CreateCustomerDto,
  ) {
    return this.customersService.create(user, data);
  }

  @Get()
  async findAll(
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.customersService.findAll(user);
  }

  @Get(':id')
  async findOne(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') customerId: string,
  ) {
    return this.customersService.findOne(
      user,
      customerId,
    );
  }

  @Patch(':id')
  async update(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') customerId: string,
    @Body() data: UpdateCustomerDto,
  ) {
    return this.customersService.update(
      user,
      customerId,
      data,
    );
  }

  @Delete(':id')
  async remove(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') customerId: string,
  ) {
    return this.customersService.remove(
      user,
      customerId,
    );
  }
}
