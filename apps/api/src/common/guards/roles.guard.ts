import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { UserRole } from '@atlas/database';

import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles =
      this.reflector.getAllAndOverride<UserRole[]>(
        ROLES_KEY,
        [
          context.getHandler(),
          context.getClass(),
        ],
      );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest();

    const user = request.user as {
      role?: UserRole;
      type?: string;
    };

    if (!user) {
      throw new ForbiddenException(
        'User not authenticated',
      );
    }

    if (user.type === 'CUSTOMER') {
      throw new ForbiddenException(
        'Customer accounts cannot access administrative resources',
      );
    }

    if (!user.role) {
      throw new ForbiddenException(
        'User role not found',
      );
    }

    const hasRole = requiredRoles.includes(
      user.role,
    );

    if (!hasRole) {
      throw new ForbiddenException(
        'You do not have permission to access this resource',
      );
    }

    return true;
  }
}
