import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCollpaseComponent } from './demo-collpase.component';

describe('DemoCollpaseComponent', () => {
  let component: DemoCollpaseComponent;
  let fixture: ComponentFixture<DemoCollpaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCollpaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCollpaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
