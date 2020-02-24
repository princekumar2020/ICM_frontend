import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementopenComponent } from './announcementopen.component';

describe('AnnouncementopenComponent', () => {
  let component: AnnouncementopenComponent;
  let fixture: ComponentFixture<AnnouncementopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
