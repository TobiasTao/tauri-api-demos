import {Component, OnInit} from '@angular/core';
import {invoke, promisified} from 'tauri/api/tauri';
import {emit, listen} from 'tauri/api/event';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  asyncMsg: string;
  listenMsg: string;

  constructor() {
  }

  ngOnInit(): void {
    listen('rust-event', res => {
      this.listenMsg = JSON.stringify(res);
    });
  }

  syncSend(): void {
    invoke({
      cmd: 'synchronousMessage',
      event: 'js-sync-msg',
      payload: {
        state: 'some string data',
        data: 17
      }
    });
  }

  asyncSend(): void {
    promisified({
      cmd: 'asynchronousMessage',
      endpoint: 'js-async-msg',
      body: {
        id: 5,
        name: 'test'
      }
    }).then(r => this.asyncMsg = JSON.stringify(r));
  }

  emitBackend(): void {
    emit('js-event', 'payload string');
  }
}
