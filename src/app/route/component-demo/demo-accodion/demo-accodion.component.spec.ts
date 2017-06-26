import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccodionComponent } from './demo-accodion.component';

describe('DemoAccodionComponent', () => {
  let component: DemoAccodionComponent;
  let fixture: ComponentFixture<DemoAccodionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAccodionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAccodionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
