import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CustomerAuthGuard } from '../../common/guards/customer-auth.guard';

import { CustomerLoginDto } from './dto/customer-login.dto';
import { CustomerAuthService } from './customer-auth.service';

@Controller('customer-auth')
export class CustomerAuthController {
  constructor(
    private readonly customerAuthService:
      CustomerAuthService,
  ) {}

  @Post('login')
  async login(
    @Body() data: CustomerLoginDto,
  ) {
    return this.customerAuthService.login(data);
  }

  @UseGuards(CustomerAuthGuard)
  @Get('me')
  async me(
    @CurrentUser() customer: {
      userId: string;
      accountId?: string;
      customerId?: string;
      tenantId: string;
      email: string;
      type?: string;
    },
  ) {
    return customer;
  }
}
