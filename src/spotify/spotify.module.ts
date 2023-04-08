import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SpotifyController } from './spotify.controller';
import { SpotifyService } from './spotify.service';

@Module({
  imports: [HttpModule],
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class SpotifyModule {}
