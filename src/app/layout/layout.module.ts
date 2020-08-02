import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {TabsComponent} from './tabs/tabs.component';
import {ContentComponent} from './content/content.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PagesModule} from '../pages/pages.module';


@NgModule({
  declarations: [LayoutComponent, TabsComponent, ContentComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule, PagesModule],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
