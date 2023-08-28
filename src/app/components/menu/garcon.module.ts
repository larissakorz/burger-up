import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './garcon-routing.module'
import { MenuComponent } from './garcon.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
