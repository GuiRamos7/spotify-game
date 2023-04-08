import { Controller, Get, Param, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Profile } from 'passport-spotify';
import { SpotifyOauthGuard } from './guards/spotify-oauth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(SpotifyOauthGuard)
  @Get('login')
  login(): void {
    return;
  }

  @UseGuards(SpotifyOauthGuard)
  @Get('redirect')
  async spotifyAuthRedirect(
    @Req() req: any,
    @Res() res: Response,
  ): Promise<Response> {
    const { user, authInfo } = req;

    if (!user) {
      res.redirect('/');
      return;
    }

    req.user = undefined;

    const jwt = this.authService.login(user);

    res.set('authorization', `Bearer ${authInfo.accessToken}`);
    res.redirect(
      `https://spotify-game-front-dqln.vercel.app?key=${authInfo.accessToken}`,
    );
    return res.status(201).json({ authInfo, user });
  }
}

// asd20071999@dsa.com
// 123123Gui

// guioliveiraramos10@gmail.com
// bRDpbeLnZPeR63R3RCvqc!.N.t8KdqaDVrnEhYWih@NGygXcmRHnXhQDEsd4PEW66uYRY2brN!4-6oy3KuPPwWQD7dJ!o9!eAX!T
