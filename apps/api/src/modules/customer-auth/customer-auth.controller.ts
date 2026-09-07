import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

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
}
