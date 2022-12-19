import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePendingComponent } from './leave-pending.component';

describe('LeavePendingComponent', () => {
  let component: LeavePendingComponent;
  let fixture: ComponentFixture<LeavePendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavePendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
