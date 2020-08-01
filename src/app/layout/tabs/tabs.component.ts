import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../layout.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input()
  drawer;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.layoutService.sidebarShrink = !this.layoutService.sidebarShrink;
    return;
  }
}
