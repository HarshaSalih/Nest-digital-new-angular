import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileSecurityComponent } from './view-profile-security.component';

describe('ViewProfileSecurityComponent', () => {
  let component: ViewProfileSecurityComponent;
  let fixture: ComponentFixture<ViewProfileSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
