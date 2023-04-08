import { Controller, Get, Req, Res } from '@nestjs/common';
import { SpotifyService } from './spotify.service';

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  getRockPlaylist(@Req() req) {
    const header = req.headers;
    return this.spotifyService.getRockPlaylist(header.authorization);
  }
}
