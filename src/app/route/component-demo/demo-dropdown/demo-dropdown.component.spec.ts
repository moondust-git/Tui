import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropdownComponent } from './demo-dropdown.component';

describe('DemoDropdownComponent', () => {
  let component: DemoDropdownComponent;
  let fixture: ComponentFixture<DemoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
