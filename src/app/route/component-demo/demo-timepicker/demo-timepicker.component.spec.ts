import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTimepickerComponent } from './demo-timepicker.component';

describe('DemoTimepickerComponent', () => {
  let component: DemoTimepickerComponent;
  let fixture: ComponentFixture<DemoTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
