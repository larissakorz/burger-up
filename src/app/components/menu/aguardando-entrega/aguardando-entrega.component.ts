import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguardando-entrega',
  templateUrl: './aguardando-entrega.component.html',
  styleUrls: ['./aguardando-entrega.component.css']
})
export class AguardandoentregaComponent {
  constructor(private router: Router) { }

  sair() {
    this.router.navigate(['/menu']);
  }
}
