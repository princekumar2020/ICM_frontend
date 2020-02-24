import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignserviceComponent } from './foreignservice.component';

describe('ForeignserviceComponent', () => {
  let component: ForeignserviceComponent;
  let fixture: ComponentFixture<ForeignserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
