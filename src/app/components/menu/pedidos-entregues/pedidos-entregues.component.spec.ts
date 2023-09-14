import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidosEntreguesComponent } from './pedidos-entregues.component';

describe('PedidosEntreguesComponent', () => {
  let component: PedidosEntreguesComponent;
  let fixture: ComponentFixture<PedidosEntreguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosEntreguesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEntreguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
