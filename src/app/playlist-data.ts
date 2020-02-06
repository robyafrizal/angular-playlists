import { Song } from "./song";

export interface PlaylistData {
  name: string;
  totalDuration: number;
  totalSongs: number;
  description: string;
  songs: Song[];
}
