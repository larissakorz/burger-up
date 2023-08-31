import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
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
      data = data.filter(pedido => pedido.status === "pending")
      data.map(pedido => pedido.currentStatus = pedido.status)
      console.log(data);
      this.orders = data;
      console.log(this.orders);
    });
  }

  concluidoOrder(order: any){
    order.status = 'concluido'
    this.orderService.editOrder(order).subscribe(data => {
      this.orders = []
      this.listOrders()
    })
  }
}
