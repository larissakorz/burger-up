import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-pedidos-entregues',
  templateUrl: './pedidos-entregues.component.html',
  styleUrls: ['./pedidos-entregues.component.css']
})
export class PedidosEntreguesComponent {
  orders: any[] = [];
  order = {
    status: 'pending',
    currentStatus: 'Pendente'
  };

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.listOrders();
  }

  private listOrders() {
    this.orderService.getOrders().subscribe(data => {
      data = data.filter(pedido => pedido.status === "concluido")
      data.map(pedido => pedido.currentStatus = pedido.status)
      console.log(data);
      this.orders = data;
      console.log(this.orders);
    });
  }

  entregueOrder(order: any){
    order.status = ''
    this.orderService.editOrder(order).subscribe(data => {
      this.orders = []
      this.listOrders()
    })
  }
}
