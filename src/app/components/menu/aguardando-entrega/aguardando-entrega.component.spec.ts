import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguardandoentregaComponent } from './aguardando-entrega.component';

describe('AguardandoentregaComponent', () => {
  let component: AguardandoentregaComponent;
  let fixture: ComponentFixture<AguardandoentregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AguardandoentregaComponent]
    });
    fixture = TestBed.createComponent(AguardandoentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
