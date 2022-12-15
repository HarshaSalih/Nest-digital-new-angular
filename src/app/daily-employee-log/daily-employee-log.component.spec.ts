import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEmployeeLogComponent } from './daily-employee-log.component';

describe('DailyEmployeeLogComponent', () => {
  let component: DailyEmployeeLogComponent;
  let fixture: ComponentFixture<DailyEmployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyEmployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyEmployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
