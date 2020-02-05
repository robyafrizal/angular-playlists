import { Component, OnInit } from "@angular/core";
import { BlockData } from "./block-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  blocks: BlockData[];

  ngOnInit() {
    this.blocks = [];
  }

  addCard() {
    this.blocks.push({
      blockHash: Math.random()
        .toString(36)
        .substring(2),
      blockNumber: this.blocks.length + 1,
      previousBlock: "0000",
      transactions: [
        {
          sender: "sender",
          recipient: "recipient",
          amount: 1,
          fee: 200
        }
      ]
    });
  }

  deleteCard() {
    this.blocks.length = 0;
  }

  title = "angular-playlist";
  card: any;
  constructor() {
    this.card = [];
  }
  deleteButton(index) {
    alert("testing Delete");
    this.card.splice(index, 1);
  }
  editButton() {
    alert("coba edit");
  }
}

export interface Playlist {
  name: string;
  totalDuration: number;
  totalSongs: number;
  description: string;
  songs: Song[];
}

export interface Song {
  title: string;
  artist: string;
  duration: number;
}

export class PlaylistComponent {
  // use this data as the mock data for the app
  playlists: Playlist[] = [
    {
      name: "Kopikustik",
      totalDuration: 5,
      totalSongs: 2,
      description:
        "More than a coffee, this is all of your favorite accoustic songs.",
      songs: [
        {
          title: "Cigarettes of ours",
          artist: "Ardhito Pramono",
          duration: 3
        },
        {
          title: "Walking Back Home",
          artist: "Vira Talisa",
          duration: 2
        }
      ]
    },
    {
      name: "Anime Hits",
      totalDuration: 13,
      totalSongs: 3,
      description: "Listen to your favorite Anime songs, all in one playlist.",
      songs: [
        {
          title: "Renai Circulation",
          artist: "Kana Hanazawa",
          duration: 4
        },
        {
          title: "Platinum Disco",
          artist: "Tsukihi Phoenix",
          duration: 4
        },
        {
          title: "Silhouette",
          artist: "KANA-BOON",
          duration: 5
        }
      ]
    }
  ];
}
