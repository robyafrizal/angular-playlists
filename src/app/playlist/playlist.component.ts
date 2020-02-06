import { Component, OnInit, Input } from "@angular/core";
import { PlaylistData } from "../playlist-data";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"]
})
export class PlaylistComponent implements OnInit {
  @Input() playlistData: PlaylistData;

  constructor() {}

  ngOnInit() {}
}
