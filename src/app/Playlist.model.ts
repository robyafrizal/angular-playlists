export interface PlaylistData {
  name: string;
  totalDuration: number;
  totalSongs: number;
  description: string;
  songs: Song[];
}
interface Song {
  title: string;
  artist: string;
  duration: number;
}
