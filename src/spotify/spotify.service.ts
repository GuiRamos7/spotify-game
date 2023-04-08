import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SpotifyService {
  constructor(private readonly axios: HttpService) {}
  // https://open.spotify.com/playlist/1XjfrjPMX6Oov9JaKYZPSq?si=1107f8d31b8c4564
  async getRockPlaylist(token: string) {
    const stepsCount = 4;
    const steps = [];
    const playlists = await axios
      .get(
        'https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U',

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => response.data);

    for (let index = 0; 4 > index; index++) {
      const songs = [];
      Array.from(Array(4).keys()).forEach(() => {
        const randomNumber = Math.floor(
          Math.random() * (playlists.tracks.items.length - 0 + 1) + 0,
        );
        songs.push(playlists.tracks.items[randomNumber]);
      });
      steps.push(songs);
    }

    console.log(steps, playlists.tracks.items.length);

    return steps;
  }
}
