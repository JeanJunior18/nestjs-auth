import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestLoginDto } from 'src/modules/auth/dto/request-login.dto';
import { AuthenticateUserService } from 'src/modules/auth/useCases/authenticate-user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticateUser: AuthenticateUserService) {}
  @Post()
  authenticate(@Body() data: RequestLoginDto) {
    console.log(data);
    return this.authenticateUser.execute(data);
  }
}
