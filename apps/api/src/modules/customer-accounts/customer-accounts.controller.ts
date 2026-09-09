import {
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { UserAuthGuard } from '../../common/guards/user-auth.guard';
import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CustomerAccountsService } from './customer-accounts.service';
import { CreateCustomerAccountDto } from './dto/create-customer-account.dto';

@UseGuards(UserAuthGuard)
@Controller('customers/:customerId/account')
export class CustomerAccountsController {
  constructor(
    private readonly customerAccountsService:
      CustomerAccountsService,
  ) {}

  @Post()
  async create(
    @CurrentUser() user: AuthenticatedUser,
    @Param('customerId') customerId: string,
    @Body() data: CreateCustomerAccountDto,
  ) {
    return this.customerAccountsService.create(
      user,
      customerId,
      data,
    );
  }
}
