import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVisitorLogComponent } from './daily-visitor-log.component';

describe('DailyVisitorLogComponent', () => {
  let component: DailyVisitorLogComponent;
  let fixture: ComponentFixture<DailyVisitorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyVisitorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyVisitorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
