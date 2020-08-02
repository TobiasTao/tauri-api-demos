import {Component, OnInit} from '@angular/core';
import * as dialog from 'tauri/api/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  selectionDialog(): void {
    dialog.open();
  }

  saveDialog(): void {
    dialog.save();
  }
}
