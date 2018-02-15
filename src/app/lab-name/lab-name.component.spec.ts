import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabNameComponent } from './lab-name.component';

describe('LabNameComponent', () => {
  let component: LabNameComponent;
  let fixture: ComponentFixture<LabNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
