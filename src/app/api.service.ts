import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
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
  viewProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewProfile",dataToSend)
  }



}
