import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMetricsComponent } from './control-metrics.component';

describe('ControlMetricsComponent', () => {
  let component: ControlMetricsComponent;
  let fixture: ComponentFixture<ControlMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
