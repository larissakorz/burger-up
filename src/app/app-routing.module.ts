import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { MenuModule } from './components/menu/menu.module';
import { FazerPedidoModule } from './components/menu/fazer-pedido/fazer-pedido.module';
import { AguardandoentregaModule } from './components/menu/aguardando-entrega/aguardando-entrega.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/login/login.component').then(m => LoginModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('../app/components/menu/menu.component').then(m => MenuModule)
  },
  {
    path: 'fazerpedidos',
    loadChildren: () => import('../app/components/menu/menu.component').then(m => FazerPedidoModule)
  },
  {
    path: 'aguardandoentrega',
    loadChildren: () => import('../app/components/menu/menu.component').then(m => AguardandoentregaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
