import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSalida } from './form-salida';

describe('FormSalida', () => {
  let component: FormSalida;
  let fixture: ComponentFixture<FormSalida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSalida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSalida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
