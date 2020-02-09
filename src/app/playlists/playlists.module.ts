import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaylistsRoutingModule } from "./playlists-routing.module";
import { PlaylistsComponent } from "./playlists.component";
import { PlaylistDialogComponent } from "./playlist-dialog/playlist-dialog.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [PlaylistsComponent, PlaylistDialogComponent],
  imports: [CommonModule, PlaylistsRoutingModule, MaterialModule],
  entryComponents: [PlaylistDialogComponent]
})
export class PlaylistsModule {}
