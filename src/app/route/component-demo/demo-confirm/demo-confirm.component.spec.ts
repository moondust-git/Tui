import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoConfirmComponent } from './demo-confirm.component';

describe('DemoConfirmComponent', () => {
  let component: DemoConfirmComponent;
  let fixture: ComponentFixture<DemoConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
