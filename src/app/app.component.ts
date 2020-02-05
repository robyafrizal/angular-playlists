import { Component, OnInit } from "@angular/core";
import { Playlist } from "./playlist";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  playlist: Playlist[];

  ngOnInit() {
    this.playlist = [];
  }

  addCard() {
    this.playlist.push({
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
    });
  }

  deleteCard() {
    this.playlist.length = 0;
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

// export class PlaylistComponent {
//   // use this data as the mock data for the app
//   playlists: Playlist[] = [
//     {
//       name: "Kopikustik",
//       totalDuration: 5,
//       totalSongs: 2,
//       description:
//         "More than a coffee, this is all of your favorite accoustic songs.",
//       songs: [
//         {
//           title: "Cigarettes of ours",
//           artist: "Ardhito Pramono",
//           duration: 3
//         },
//         {
//           title: "Walking Back Home",
//           artist: "Vira Talisa",
//           duration: 2
//         }
//       ]
//     },
//     {
//       name: "Anime Hits",
//       totalDuration: 13,
//       totalSongs: 3,
//       description: "Listen to your favorite Anime songs, all in one playlist.",
//       songs: [
//         {
//           title: "Renai Circulation",
//           artist: "Kana Hanazawa",
//           duration: 4
//         },
//         {
//           title: "Platinum Disco",
//           artist: "Tsukihi Phoenix",
//           duration: 4
//         },
//         {
//           title: "Silhouette",
//           artist: "KANA-BOON",
//           duration: 5
//         }
//       ]
//     }
//   ];
// }
