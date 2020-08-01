import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // 层级
  level = 0;

  menu: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.menu = [
      {
        id: '0',
        label: 'Home',
        icon: 'home',
        router: 'home'
      },
      {
        id: '1',
        label: 'Communication',
        icon: 'chat',
        router: 'communication'
      }
    ];
  }

}

export interface MenuItem {
  icon?: string;
  id?: string;
  label?: string;
  pid?: string;
  path?: string;
  router?: string;
}
