import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {
  items: any[] = [];
  destinoItems: any[] = [];
  type: string = 'cafe';

  constructor(
    private dataService: ProductsService,
    private router: Router
  ) {}

  onClick(param: string) {
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data.filter((item: any) => item.type === param);
    });
  }

  moverItem(item: any) {
    const itemCopy = { ...item, quantity: 1 };
    this.destinoItems.push(itemCopy);
  }

  incrementQuantity(item: any) {
    item.quantity++;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  calcularQuantidadeTotal(): number {
    return this.destinoItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  ngOnInit(): void {
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data.filter((item: any) => item.type === this.type);
    });
  }

  enviar(){
    this.router.navigate(['/aguardandopedidos']);
  }
}
