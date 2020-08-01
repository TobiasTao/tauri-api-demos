import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';


const components = [MatIconModule, MatButtonModule, MatSidenavModule, MatExpansionModule, MatListModule];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialModule {
}
