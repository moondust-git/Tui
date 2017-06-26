import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWaterfullComponent } from './demo-waterfull.component';

describe('DemoWaterfullComponent', () => {
  let component: DemoWaterfullComponent;
  let fixture: ComponentFixture<DemoWaterfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoWaterfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWaterfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
