import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAlertsComponent } from './control-alerts.component';

describe('ControlAlertsComponent', () => {
  let component: ControlAlertsComponent;
  let fixture: ComponentFixture<ControlAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
