import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAfiliadoComponent } from './crear-afiliado.component';

describe('CrearAfiliadoComponent', () => {
  let component: CrearAfiliadoComponent;
  let fixture: ComponentFixture<CrearAfiliadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAfiliadoComponent]
    });
    fixture = TestBed.createComponent(CrearAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
