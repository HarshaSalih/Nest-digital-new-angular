import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-pending',
  templateUrl: './leave-pending.component.html',
  styleUrls: ['./leave-pending.component.css']
})
export class LeavePendingComponent {

  empId:any=""
  data:any=[]
  constructor(private api:ApiService){
  this.empId=localStorage.getItem("userInfo")
  let data:any={"empId":this.empId}
  this.api.viewLeavePending(data).subscribe(
    (response:any)=>{
      console.log(response)
      this.data=response
    }
  )
}

}
