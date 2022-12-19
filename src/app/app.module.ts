import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ViewProfileEmployeeComponent } from './view-profile-employee/view-profile-employee.component';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { ViewProfileSecurityComponent } from './view-profile-security/view-profile-security.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { ViewEmployeeLogComponent } from './view-employee-log/view-employee-log.component';
import { DailyEmployeeLogComponent } from './daily-employee-log/daily-employee-log.component';
import { DailyVisitorLogComponent } from './daily-visitor-log/daily-visitor-log.component';
import { ViewVisitorLogComponent } from './view-visitor-log/view-visitor-log.component';
import { LogNavComponent } from './log-nav/log-nav.component';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LeavePendingComponent } from './leave-pending/leave-pending.component';


const myRoute:Routes=[

  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
    path:"searchemployee",
    component:SearchEmployeeComponent
  },
  {
    path:"viewemployee",
    component:ViewEmployeeComponent
  },
  {
    path:"viewprofileemployee",
    component:ViewProfileEmployeeComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  },
  {
    path:"addsecurity",
    component:AddSecurityComponent
  },
  {
    path:"searchsecurity",
    component:SearchSecurityComponent
  },
  {
    path:"viewsecurity",
    component:ViewSecurityComponent
  },
  {
    path:"viewprofilesecurity",
    component:ViewProfileSecurityComponent
  },
  {
    path:"applyleave",
    component:ApplyLeaveComponent
  },
  {
    path:"viewleave",
    component:ViewLeaveComponent
  },
  {
    path:"leavestatus",
    component:LeaveStatusComponent
  },

  {
    path:"leavepending",
    component:LeavePendingComponent
  },

  {
    path:"employeelog",
    component:EmployeeLogComponent
  },
  {
    path:"viewemployeelog",
    component:ViewEmployeeLogComponent
  },
  {
    path:"dailyemployeelog",
    component:DailyEmployeeLogComponent
  },
  {
    path:"visitorlog",
    component:VisitorLogComponent
  },
  {
    path:"viewvisitorlog",
    component:ViewVisitorLogComponent
  },
  {
    path:"dailyvisitorlog",
    component:DailyVisitorLogComponent
  }

  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    AddSecurityComponent,
    SearchEmployeeComponent,
    AdminNavComponent,
    ViewEmployeeComponent,
    EmployeeLoginComponent,
    ViewProfileEmployeeComponent,
    EmployeeNavComponent,
    SecurityLoginComponent,
    SearchSecurityComponent,
    ViewSecurityComponent,
    ViewProfileSecurityComponent,
    SecurityNavComponent,
    ApplyLeaveComponent,
    ViewLeaveComponent,
    LeaveStatusComponent,
    EmployeeLogComponent,
    VisitorLogComponent,
    ViewEmployeeLogComponent,
    DailyEmployeeLogComponent,
    DailyVisitorLogComponent,
    ViewVisitorLogComponent,
    LogNavComponent,
    HomeComponent,
    HomeNavComponent,
    LeavePendingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
