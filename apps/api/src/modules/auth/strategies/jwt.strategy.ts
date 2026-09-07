import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { UserRole } from '@atlas/database';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import { AuthenticatedUser } from '../../../common/types/authenticated-user.type';

interface JwtPayload {
  sub: string;
  tenantId: string;
  email: string;
  role: UserRole;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      ignoreExpiration: false,

      secretOrKey:
        process.env.JWT_SECRET ||
        'atlas-development-secret-change-in-production',
    });
  }

  async validate(
    payload: JwtPayload,
  ): Promise<AuthenticatedUser> {
    return {
      userId: payload.sub,
      tenantId: payload.tenantId,
      email: payload.email,
      role: payload.role,
    };
  }
}
