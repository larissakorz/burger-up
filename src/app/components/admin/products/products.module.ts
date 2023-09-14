import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProdutosRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ],
})
export class ProdutosModule { }
