import { Component, OnInit, Input } from "@angular/core";
import { Playlist } from "../playlist";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"]
})
export class PlaylistComponent implements OnInit {
  @Input() playlistData: Playlist;

  constructor() {}

  ngOnInit() {}
}
