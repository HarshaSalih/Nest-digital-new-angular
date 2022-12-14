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
import { EmployeeNavComponent } from './employee-nav/employee-nav.component'

const myRoute:Routes=[
  {
    path:"",
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
  }

  // {
  //   path:"addsecurity",
  //   component:AddSecurityComponent
  // }
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
    EmployeeNavComponent
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
