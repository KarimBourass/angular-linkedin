import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePostDialogComponent} from "../../dialogs/create-post-dialog/create-post-dialog.component";

@Component({
  selector: 'start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent {

  constructor(public dialog: MatDialog) {}


  onCreatePost() {
    console.log('onCreatePost');
    this.dialog.open(CreatePostDialogComponent, {
      width: '700px',
    });
  }

}
