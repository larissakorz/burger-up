import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FazerPedidoRoutingModule } from './fazer-pedido-routing.module';
import { FazerPedidoComponent } from './fazer-pedido.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FazerPedidoComponent
  ],
  imports: [
    CommonModule,
    FazerPedidoRoutingModule,
    FormsModule
  ],
  exports: [
    FazerPedidoComponent
  ]
})
export class FazerPedidoModule { }
