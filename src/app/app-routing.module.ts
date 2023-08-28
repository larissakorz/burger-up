import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { MenuModule } from '../app/components/menu/garcon.module';
import { FazerPedidoModule } from './components/menu/fazer-pedido/fazer-pedido.module';
import { AguardandoentregaModule } from './components/menu/aguardando-entrega/aguardando-entrega.module';
import { PedidosEntreguesModule } from './components/menu/pedidos-entregues/pedidos-entregues.module';
import { CozinhaModule } from '../app/components/cozinha/cozinha.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/login/login.component').then(m => LoginModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/garcon.component').then(m => MenuModule)
  },
  {
    path: 'fazerpedidos',
    loadChildren: () => import('./components/menu/garcon.component').then(m => FazerPedidoModule)
  },
  {
    path: 'aguardandoentrega',
    loadChildren: () => import('./components/menu/garcon.component').then(m => AguardandoentregaModule)
  },
  {
    path: 'pedidoentregue',
    loadChildren: () => import('./components/menu/garcon.component').then(m => PedidosEntreguesModule)
  },
  {
    path: 'cozinha',
    loadChildren: () => import('./components/cozinha/cozinha.module').then(m => CozinhaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
