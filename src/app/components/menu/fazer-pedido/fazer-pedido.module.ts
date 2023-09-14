import { NgModule } from '@angular/core';
import { FazerPedidoRoutingModule } from './fazer-pedido-routing.module';
import { FazerPedidoComponent } from './fazer-pedido.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FazerPedidoComponent
  ],
  imports: [
    FazerPedidoRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    FazerPedidoComponent
  ]
})
export class FazerPedidoModule { }
