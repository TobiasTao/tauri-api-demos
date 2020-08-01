import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CommunicationComponent} from './communication/communication.component';


@NgModule({
  declarations: [HomeComponent, CommunicationComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule {
}
