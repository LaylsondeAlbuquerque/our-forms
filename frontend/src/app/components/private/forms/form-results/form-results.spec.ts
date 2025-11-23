import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResults } from './form-results';

describe('FormResults', () => {
  let component: FormResults;
  let fixture: ComponentFixture<FormResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
