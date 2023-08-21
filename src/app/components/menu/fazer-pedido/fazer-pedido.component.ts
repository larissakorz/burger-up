import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {
  items: any[] = [];
  type: string = 'drink';

  constructor(private dataService: ProductsService) { }

  onClick(param: string) {
    console.log(param)
    this.dataService.getItems().subscribe((data: any) => {

      this.items = data.filter((data: any) => data.type == param);

    });
  }

  ngOnInit(): void {
    this.dataService.getItems().subscribe((data: any) => {

      this.items = data.filter((data: any) => data.type == this.type);

    });
  }
}
