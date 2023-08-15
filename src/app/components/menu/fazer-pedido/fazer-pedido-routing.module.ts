import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazerPedidoComponent } from '../fazer-pedido/fazer-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: FazerPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FazerPedidoRoutingModule { }
