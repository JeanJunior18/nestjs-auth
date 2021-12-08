import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/modules/auth/controller/rest.controller';
import { AuthenticateUserService } from 'src/modules/auth/useCases/authenticate-user.service';
import { JwtStrategyService } from 'src/modules/auth/useCases/jwt-strategy.service';

@Module({
  imports: [
    JwtModule.register({
      secret: '123abc',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthenticateUserService, JwtStrategyService],
})
export class AuthModule {}
