import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: TUser,
    info: any,
    context: ExecutionContext,
  ): TUser {
    if (err || !user) {
      throw err || new ForbiddenException('Unauthorized');
    }

    const authenticatedUser = user as {
      type?: string;
    };

    if (authenticatedUser.type === 'CUSTOMER') {
      throw new ForbiddenException(
        'Customer accounts cannot access administrative resources',
      );
    }

    return user;
  }
}
