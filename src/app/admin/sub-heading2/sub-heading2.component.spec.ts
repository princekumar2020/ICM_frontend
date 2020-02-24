import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeading2Component } from './sub-heading2.component';

describe('SubHeading2Component', () => {
  let component: SubHeading2Component;
  let fixture: ComponentFixture<SubHeading2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHeading2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeading2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
