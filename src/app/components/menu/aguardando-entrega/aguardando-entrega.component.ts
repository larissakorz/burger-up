import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-aguardando-entrega',
  templateUrl: './aguardando-entrega.component.html',
  styleUrls: ['./aguardando-entrega.component.css']
})
export class AguardandoentregaComponent {
  orders: any[] = [];

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.listOrders();
  }

  private listOrders() {
    this.orderService.getOrders().subscribe(data => {
      data = data.filter(pedido => pedido.status === "pending")
      data.map(pedido => pedido.currentStatus = pedido.status)
      console.log(data);
      this.orders = data;
      console.log(this.orders);
    });
  }

  cancelOrder(order: any){
    order.status = 'canceled'
    this.orderService.editOrder(order).subscribe(data => {
      this.orders = []
      this.listOrders()
    })
  }
}
