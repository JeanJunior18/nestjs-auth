import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { VerifyCallback, Strategy } from 'passport-google-oauth20';
import { User } from 'src/modules/user/core/domain/user.entity';

@Injectable()
export class GoogleStrategyService extends PassportStrategy(
  Strategy,
  'google',
) {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const user: User = {
      id: profile.id,
      name: profile.displayName,
      username: profile.emails[0].value,
      role: 'user',
      socialMedia: {},
      profilePicture: profile.photos[0].value,
    };

    done(null, user);
  }
}
