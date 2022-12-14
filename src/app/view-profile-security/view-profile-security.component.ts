import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile-security',
  templateUrl: './view-profile-security.component.html',
  styleUrls: ['./view-profile-security.component.css']
})
export class ViewProfileSecurityComponent {

  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any={"id":this.userId}
    this.api.viewProfileSecurity(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response;
      }
    )
  }
  data:any=[]


}
