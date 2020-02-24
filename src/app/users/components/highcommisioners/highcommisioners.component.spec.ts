import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcommisionersComponent } from './highcommisioners.component';

describe('HighcommisionersComponent', () => {
  let component: HighcommisionersComponent;
  let fixture: ComponentFixture<HighcommisionersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcommisionersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcommisionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
