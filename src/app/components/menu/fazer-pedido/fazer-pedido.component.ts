import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/products/products.service';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getItems().subscribe((data: any) => {
      console.log(data)
      this.items = data.items;
    });
  }
}
