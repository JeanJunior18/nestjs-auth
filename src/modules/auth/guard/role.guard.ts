import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/modules/user/core/domain/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const role = this.reflector.get<string>('role', context.getHandler());
    if (!role) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user as User;

    return user.role === role;
  }
}
