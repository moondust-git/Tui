import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPaginationComponent } from './demo-pagination.component';

describe('DemoPaginationComponent', () => {
  let component: DemoPaginationComponent;
  let fixture: ComponentFixture<DemoPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
