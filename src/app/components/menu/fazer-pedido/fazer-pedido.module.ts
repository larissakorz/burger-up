import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FazerPedidoRoutingModule } from '../fazer-pedido/fazer-pedido-routing.module';
import { FazerPedidoComponent } from './fazer-pedido.component';

@NgModule({
  declarations: [
    FazerPedidoComponent
  ],
  imports: [
    CommonModule,
    FazerPedidoRoutingModule,
  ],
  exports: [
    FazerPedidoComponent
  ]
})
export class FazerPedidoModule { }
