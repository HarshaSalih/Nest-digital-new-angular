import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {

empId:any=""
searchData:any=[]
constructor(private api:ApiService){
  this.empId=localStorage.getItem("userInfo")
}

readValue=()=>
{
  let data:any={"empId":this.empId}
  console.log(data)
  this.api.searchStatus(data).subscribe(
    (response:any)=>
    {
     this.searchData=response
      
    }
  )
}
data:any=[]

}
