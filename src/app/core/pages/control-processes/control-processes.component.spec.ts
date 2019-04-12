import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlProcessesComponent } from './control-processes.component';

describe('ControlProcessesComponent', () => {
  let component: ControlProcessesComponent;
  let fixture: ComponentFixture<ControlProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
