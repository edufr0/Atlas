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

import { UserRole } from '@atlas/database';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { UserAuthGuard } from '../../common/guards/user-auth.guard';
import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@UseGuards(
  UserAuthGuard,
  RolesGuard,
)
@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
  ) {}

  @Post()
  @Roles(
    UserRole.OWNER,
    UserRole.ADMIN,
    UserRole.OPERATOR,
    UserRole.REPRESENTATIVE,
  )
  async create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() data: CreateCustomerDto,
  ) {
    return this.customersService.create(
      user,
      data,
    );
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
  @Roles(
    UserRole.OWNER,
    UserRole.ADMIN,
    UserRole.OPERATOR,
    UserRole.REPRESENTATIVE,
  )
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
  @Roles(
    UserRole.OWNER,
    UserRole.ADMIN,
  )
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
