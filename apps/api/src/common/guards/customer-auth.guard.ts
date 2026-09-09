import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class CustomerAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: TUser,
  ): TUser {
    if (err || !user) {
      throw err || new ForbiddenException(
        'Unauthorized',
      );
    }

    const authenticatedUser = user as {
      type?: string;
    };

    if (authenticatedUser.type !== 'CUSTOMER') {
      throw new ForbiddenException(
        'Only customer accounts can access this resource',
      );
    }

    return user;
  }
}
