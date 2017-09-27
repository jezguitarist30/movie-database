import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOperatorComponent } from './math-operator.component';

describe('MathOperatorComponent', () => {
  let component: MathOperatorComponent;
  let fixture: ComponentFixture<MathOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
