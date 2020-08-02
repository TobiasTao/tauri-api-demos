import {Component, OnInit} from '@angular/core';
import {listen} from 'tauri/api/event';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  listenMsg: string;

  constructor() {
  }

  ngOnInit(): void {
    listen('rust-event', res => {
      this.listenMsg = JSON.stringify(res);
    });
  }

}
