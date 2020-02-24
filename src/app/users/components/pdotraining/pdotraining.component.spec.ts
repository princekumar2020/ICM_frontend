import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdotrainingComponent } from './pdotraining.component';

describe('PdotrainingComponent', () => {
  let component: PdotrainingComponent;
  let fixture: ComponentFixture<PdotrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdotrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdotrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
