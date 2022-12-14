import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  employeeLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeLogin",dataToSend)
  }

  addEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addEmployee",dataToSend)
  }

  searchEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchEmployee",dataToSend)
  }

  deleteEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/deleteEmployee",dataToSend)
  }

  viewEmployee=()=>
  {
    return this.http.get("http://localhost:8080/viewEmployee")
  }

  viewProfileEmployee=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewProfile",dataToSend)
  }

  securityLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/securityLogin",dataToSend)
  }

  addSecurity=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addSecurity",dataToSend)
  }

  searchSecurity=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchSecurity",dataToSend)
  }

  deleteSecurity=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/deleteSecurity",dataToSend)
  }

  viewSecurity=()=>
  {
    return this.http.get("http://localhost:8080/viewSecurity")
  }

  viewProfileSecurity=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewSecurityProfile",dataToSend)
  }

  applyLeave=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addLeave",dataToSend)
  }

  viewLeave=()=>
  {
    return this.http.get("http://localhost:8080/viewAllLeaves")
  }

  leaveStatus=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/updateStatus",dataToSend)
  }



}
