import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEntreguesComponent } from './pedidos-entregues.component';

describe('PedidosEntreguesComponent', () => {
  let component: PedidosEntreguesComponent;
  let fixture: ComponentFixture<PedidosEntreguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosEntreguesComponent]
    });
    fixture = TestBed.createComponent(PedidosEntreguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
