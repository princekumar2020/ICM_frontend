import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerchairmanComponent } from './formerchairman.component';

describe('FormerchairmanComponent', () => {
  let component: FormerchairmanComponent;
  let fixture: ComponentFixture<FormerchairmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerchairmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerchairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
