import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {
  items: any[] = [];
  destinoItems: any[] = [];
  type: string = 'cafe';
  garcon: any = {};
  nomeClient: string = "";
  products: any[] = [];
  errorMessage: string = '';

  constructor(
    private dataService: ProductsService,
    private storage: LocalStorageService,
    private orderService: OrderService,
  ) {}

  onClick(param: string) {
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data.filter((item: any) => item.type === param);
    });
  }

  moverItem(item: any) {
    const itemExists = this.destinoItems.some((destinoItem: any) => destinoItem.id === item.id);

    if (!itemExists) {
      const itemCopy = { ...item, quantity: 0 };
      this.destinoItems.push(itemCopy);
    }
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

  excluirItem(index: number) {
    this.destinoItems.splice(index, 1);
  }

  ngOnInit(): void {
    this.buscarDadosGarcon()
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data.filter((item: any) => item.type === this.type);
    });
  }

  buscarDadosGarcon() {
    this.garcon = this.storage.getItem("user_data")
  }

  formatarData() {
    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.getFullYear()}-${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}-${dataAtual.getDate().toString().padStart(2, '0')} ${dataAtual.getHours().toString().padStart(2, '0')}:${dataAtual.getMinutes().toString().padStart(2, '0')}:${dataAtual.getSeconds().toString().padStart(2, '0')}`;
    return dataFormatada;
  }

  addToCart(item: any) {
    console.log(item);

    const cartItemIndex = this.destinoItems.findIndex(cartItem => cartItem.id === item.id);
    console.log(cartItemIndex)
    if (cartItemIndex === -1) {
      const cartItem = { ...item, quantity: 1 };
      this.destinoItems.push(cartItem);
    } else {
      this.destinoItems[cartItemIndex].quantity++;
    }
    console.log(this.destinoItems)
  }

  enviar() {
    if (this.destinoItems.length === 0) {
      this.errorMessage = 'Não é possível enviar um pedido vazio.';
      return;
    }

    const pedido = {
      userId: this.garcon.id,
      client: this.nomeClient,
      products: this.destinoItems.map(cartItem => ({
        product: cartItem,
        qty: cartItem.quantity,
        dateEntry: this.formatarData()
      })),
      status: "pending",
      dateEntry: this.formatarData()
    };

    console.log(pedido)

    this.orderService.addOrder(pedido).subscribe(
      response => {
        this.errorMessage = '';
        alert('Pedido enviado com sucesso!');
        this.destinoItems = [];
        this.nomeClient = "";
        const currentTime = this.formatarData();
        this.destinoItems.forEach(item => {
          item.dateCompleted = currentTime;
        });
      },
      error => {
        console.error('Erro ao enviar pedido:', error);
        this.errorMessage = 'Erro ao enviar o pedido. Por favor, tente novamente mais tarde.';
      }
    );
  }
}
