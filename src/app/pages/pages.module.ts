import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CommunicationComponent} from './communication/communication.component';
import {SharedModule} from '../shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';


@NgModule({
  declarations: [HomeComponent, CommunicationComponent, SplashscreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class PagesModule {
}
