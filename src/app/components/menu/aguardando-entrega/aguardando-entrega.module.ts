import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AguardandoentregaRoutingModule } from './aguardando-entrega-routing.module';
import { AguardandoentregaComponent } from './aguardando-entrega.component';

@NgModule({
  declarations: [
    AguardandoentregaComponent
  ],
  imports: [
    CommonModule,
    AguardandoentregaRoutingModule,
  ],
  exports: [
    AguardandoentregaComponent
  ]
})
export class AguardandoentregaModule { }
