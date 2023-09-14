import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { ColaboradorRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    FormsModule
  ],
  exports: [
    UsersComponent
  ],
})
export class ColaboradorModule { }
