import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouseventsComponent } from './previousevents.component';

describe('PreviouseventsComponent', () => {
  let component: PreviouseventsComponent;
  let fixture: ComponentFixture<PreviouseventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouseventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
