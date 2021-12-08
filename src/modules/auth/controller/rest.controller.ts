import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RequestLoginDto } from 'src/modules/auth/dto/request-login.dto';
import { JwtGuard } from 'src/modules/auth/guard/jwt.guard';
import { AuthenticateUserService } from 'src/modules/auth/useCases/authenticate-user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticateUser: AuthenticateUserService) {}
  @Post()
  authenticate(@Body() data: RequestLoginDto) {
    return this.authenticateUser.execute(data);
  }

  @UseGuards(JwtGuard)
  @Get('ping')
  test() {
    return 'pong';
  }
}
