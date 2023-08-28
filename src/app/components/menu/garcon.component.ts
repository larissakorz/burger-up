import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garcon',
  templateUrl: './garcon.component.html',
  styleUrls: ['./garcon.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }

  sair() {
    this.router.navigate(['/']);
  }

  fazerPedido() {
    this.router.navigate(['/fazerpedidos']);
  }

  aguardandoEntrega(){
    this.router.navigate(['/aguardandoentrega']);
  }

  pedidoentregue(){
    this.router.navigate(['/pedidoentregue']);
  }
}
