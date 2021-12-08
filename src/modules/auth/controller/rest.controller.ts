import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from 'src/modules/auth/decorator/role.decorator';
import { RequestLoginDto } from 'src/modules/auth/dto/request-login.dto';
import { GoogleGuard } from 'src/modules/auth/guard/google.guard';
import { JwtGuard } from 'src/modules/auth/guard/jwt.guard';
import { RoleGuard } from 'src/modules/auth/guard/role.guard';
import { AuthenticateUserService } from 'src/modules/auth/useCases/authenticate-user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticateUser: AuthenticateUserService) {}
  @Post()
  authenticate(@Body() data: RequestLoginDto) {
    return this.authenticateUser.execute(data);
  }

  @UseGuards(JwtGuard, RoleGuard)
  @Role('admin')
  @Get('ping')
  test() {
    return 'pong';
  }

  @UseGuards(GoogleGuard)
  @Get('google')
  google() {
    return 'Hey google';
  }

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  googleRedirect() {
    return 'Hey google Callback';
  }
}
