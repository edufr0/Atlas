import {
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UserRole } from '@atlas/database';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { UserAuthGuard } from '../../common/guards/user-auth.guard';
import type { AuthenticatedUser } from '../../common/types/authenticated-user.type';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@UseGuards(
  UserAuthGuard,
  RolesGuard,
)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @Roles(
    UserRole.OWNER,
    UserRole.ADMIN,
  )
  create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() data: CreateUserDto,
  ) {
    return this.usersService.create(
      user,
      data,
    );
  }
}
