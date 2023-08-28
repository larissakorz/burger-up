import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosEntreguesComponent } from '../pedidos-entregues/pedidos-entregues.component';

const routes: Routes = [
  {
    path: '',
    component: PedidosEntreguesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosEntreguesRoutingModule { }
