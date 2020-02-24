import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RticomplainComponent } from './rticomplain.component';

describe('RticomplainComponent', () => {
  let component: RticomplainComponent;
  let fixture: ComponentFixture<RticomplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RticomplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RticomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
