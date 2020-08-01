import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {LayoutService} from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor(private layoutService: LayoutService) {
  }

  @HostBinding('class.sidebar-shrink') get sidebarShrink(): boolean {
    return this.layoutService.sidebarShrink;
  }

  ngOnInit(): void {
  }

}
