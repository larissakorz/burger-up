import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  private loginSubscription: Subscription | undefined;
  public errorMessage: string | undefined;

  constructor(
    private readonly service: LoginService,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) {}

onClick() {
  this.loginSubscription = this.service.login(this.email, this.senha).subscribe({
    next: (response: any) => {
      console.log(response);
      console.log('accessToken:', response.accessToken);
      if (response.accessToken && response.user && response.user.role) {
        this.localStorageService.setItem('user_data', response.user);
        this.localStorageService.setItem('accessToken', response.accessToken);
        switch (response.user.role) {
          case 'atendente':
            this.router.navigate(['/menu']);
            break;
          default:
            console.error('Função de usuário inválida:', response.user.role);
        }
      }
    },
    error: (error: any) => {
      console.error('falha no login:', error);
      if (error.status === 400) {
        this.errorMessage = 'Senha incorreta';
      } else if (error.status === 404) {
        this.errorMessage = 'Usuário inexistente';
      } else {
        this.errorMessage = 'Erro desconhecido';
      }
    }
  });
}
}
