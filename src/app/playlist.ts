import { Song } from "./song";

// export interface BlockData {
//   blockHash: string;
//   blockNumber: number;
//   previousBlock: string;
//   transactions: Transaction[];
// }

export interface Playlist {
  name: string;
  totalDuration: number;
  totalSongs: number;
  description: string;
  songs: Song[];
}
