import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguardandoentregaComponent } from './aguardando-entrega.component';

const routes: Routes = [
  {
    path: '',
    component: AguardandoentregaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguardandoentregaRoutingModule { }
