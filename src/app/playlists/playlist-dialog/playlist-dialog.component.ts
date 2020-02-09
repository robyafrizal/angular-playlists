import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PlaylistData } from "../../Playlist.model";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-playlist-dialog",
  templateUrl: "./playlist-dialog.component.html",
  styleUrls: ["./playlist-dialog.component.css"]
})
export class PlaylistDialogComponent implements OnInit {
  playListData: PlaylistData;
  playlistForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      operation: string;
      playlistData: PlaylistData;
      position: number;
    },
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initiateForm();

    if (this.data.operation === "edit") {
      this.data.playlistData.songs.forEach((song, index) => {
        if (index > 0) {
          this.addSong();
        }
      });
      this.playlistForm.patchValue(this.data.playlistData);
    }
  }

  initiateForm() {
    this.playlistForm = this.fb.group({
      name: ["", Validators.required],
      totalDuration: [0],
      description: ["", Validators.required],
      songs: this.fb.array([this.initSongsFormArray()])
    });
  }

  initSongsFormArray() {
    return this.fb.group({
      title: ["", Validators.required],
      artist: ["", Validators.required],
      duration: [null, [Validators.required, Validators.min(0)]]
    });
  }

  get songs() {
    return this.playlistForm.get("songs") as FormArray;
  }

  addSong() {
    this.songs.push(this.initSongsFormArray());
  }

  removeSong(index: number) {
    this.songs.removeAt(index);
  }

  onSubmit() {
    this.playListData = this.playlistForm.getRawValue();

    let totalDuration = 0;
    this.playListData.songs.forEach(song => (totalDuration += song.duration));
    this.playListData.totalDuration = totalDuration;
    this.playListData.totalSongs = this.playListData.songs.length;

    this.dialogRef.close({
      data: this.playListData,
      index: this.data.position
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
