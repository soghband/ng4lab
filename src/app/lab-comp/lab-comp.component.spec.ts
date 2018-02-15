import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCompComponent } from './lab-comp.component';

describe('LabCompComponent', () => {
  let component: LabCompComponent;
  let fixture: ComponentFixture<LabCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
