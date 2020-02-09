import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PlaylistDialogComponent } from "./playlist-dialog/playlist-dialog.component";
import { PlaylistData } from "../Playlist.model";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.css"]
})
export class PlaylistsComponent implements OnInit {
  playlists: PlaylistData[] = [
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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addPlaylist() {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: "900px",
      data: {
        operation: "create"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data) {
        this.playlists.push(result.data);
      }
    });
  }

  editPlaylist(playlist: PlaylistData, index: number) {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: "900px",
      data: {
        operation: "edit",
        playlistData: playlist,
        position: index
      }
    });

    dialogRef
      .afterClosed()
      .subscribe((result: { data: PlaylistData; index: number }) => {
        if (result.data) {
          this.playlists[result.index] = result.data;
        }
      });
  }

  deletePlaylist(i: number) {
    this.playlists.splice(i, 1);
  }
}
