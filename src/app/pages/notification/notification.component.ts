import {Component, OnInit} from '@angular/core';
import {emit} from 'tauri/api/event';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  showNotification(): void {
    const notification = new Notification('Hi there!');
  }

  showNotification2(): void {
    emit('notification', 'notification data');
  }
}
