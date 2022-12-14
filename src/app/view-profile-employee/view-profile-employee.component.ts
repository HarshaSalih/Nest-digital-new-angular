import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile-employee',
  templateUrl: './view-profile-employee.component.html',
  styleUrls: ['./view-profile-employee.component.css']
})
export class ViewProfileEmployeeComponent {

  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any={"id":this.userId}
    this.api.viewProfileEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response;
      }
    )
  }
  data:any=[]


}
