import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommunicationComponent} from './pages/communication/communication.component';
import {HomeComponent} from './pages/home/home.component';
import {SplashscreenComponent} from './pages/splashscreen/splashscreen.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'communication',
    component: CommunicationComponent
  },
  {
    path: 'splashscreen',
    component: SplashscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
