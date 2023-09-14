import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FazerPedidoComponent } from './fazer-pedido.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('FazerPedidoComponent', () => {
  let component: FazerPedidoComponent;
  let fixture: ComponentFixture<FazerPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FazerPedidoComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(FazerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
