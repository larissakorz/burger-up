import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: jasmine.SpyObj<LoginService>;
  let router: jasmine.SpyObj<Router>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['setItem']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /menu on successful login for "atendente"', () => {
    loginService.login.and.returnValue(of({ accessToken: 'token', user: { role: 'atendente' } }));
    component.onClick();
    expect(router.navigate).toHaveBeenCalledWith(['/menu']);
  });

  it('should set user_data and accessToken in localStorage on successful login', () => {
    loginService.login.and.returnValue(of({ accessToken: 'token', user: { role: 'atendente' } }));
    component.onClick();
    expect(localStorageService.setItem).toHaveBeenCalledWith('user_data', { role: 'atendente' });
    expect(localStorageService.setItem).toHaveBeenCalledWith('accessToken', 'token');
  });

  it('should handle error with status 400 as "Senha incorreta"', () => {
    loginService.login.and.returnValue(throwError({ status: 400 }));
    component.onClick();
    expect(component.errorMessage).toEqual('Senha incorreta');
  });

  it('should handle error with status 404 as "Usuário inexistente"', () => {
    loginService.login.and.returnValue(throwError({ status: 404 }));
    component.onClick();
    expect(component.errorMessage).toEqual('Usuário inexistente');
  });

  it('should handle unknown error as "Erro desconhecido"', () => {
    loginService.login.and.returnValue(throwError({ status: 500 }));
    component.onClick();
    expect(component.errorMessage).toEqual('Erro desconhecido');
  });
});
