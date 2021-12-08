import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { usersMock } from 'test/modules/auth/useCases/authenticate-user.spec';
import { validatePassword } from 'src/infrastructure/utils/bcrypt';
import { RequestLoginDto } from 'src/modules/auth/dto/request-login.dto';

@Injectable()
export class AuthenticateUserService {
  constructor(private readonly jwtService: JwtService) {}

  async execute(data: RequestLoginDto) {
    const { username, password } = data;
    const user = this.validateCredentials(username, password);

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  private validateCredentials(username: string, password: string) {
    const user = usersMock.find(
      (user) =>
        user.username === username && validatePassword(password, user.password),
    );

    if (!user) throw new HttpException('Invalid credentials', 401);

    return user;
  }
}
