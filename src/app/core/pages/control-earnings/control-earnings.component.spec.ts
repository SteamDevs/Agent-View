import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEarningsComponent } from './control-earnings.component';

describe('ControlEarningsComponent', () => {
  let component: ControlEarningsComponent;
  let fixture: ComponentFixture<ControlEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
