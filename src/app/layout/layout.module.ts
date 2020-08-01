import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {TabsComponent} from './tabs/tabs.component';
import {ContentComponent} from './content/content.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MaterialModule} from '../shared/material.module';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [LayoutComponent, TabsComponent, ContentComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
