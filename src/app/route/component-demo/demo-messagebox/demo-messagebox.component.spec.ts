import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMessageboxComponent } from './demo-messagebox.component';

describe('DemoMessageboxComponent', () => {
  let component: DemoMessageboxComponent;
  let fixture: ComponentFixture<DemoMessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
