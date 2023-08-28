import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosEntreguesRoutingModule } from '../pedidos-entregues/pedidos-entregues-routing.module';
import { PedidosEntreguesComponent } from '../pedidos-entregues/pedidos-entregues.component';

@NgModule({
  declarations: [
    PedidosEntreguesComponent
  ],
  imports: [
    CommonModule,
    PedidosEntreguesRoutingModule,
  ],
  exports: [
    PedidosEntreguesComponent
  ]
})
export class PedidosEntreguesModule { }
