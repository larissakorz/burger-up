import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: any[] = [];

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.orderService.getOrders().subscribe(data => {
      data.map(pedido => pedido.currentStatus = pedido.status)
      console.log(data);
      this.orders = data;
      console.log(this.orders);
    });
  }
}
