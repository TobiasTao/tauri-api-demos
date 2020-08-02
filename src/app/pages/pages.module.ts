import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CommunicationComponent} from './communication/communication.component';
import {SharedModule} from '../shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [HomeComponent, CommunicationComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class PagesModule {
}
