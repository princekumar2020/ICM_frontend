import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiactComponent } from './rtiact.component';

describe('RtiactComponent', () => {
  let component: RtiactComponent;
  let fixture: ComponentFixture<RtiactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
