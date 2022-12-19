import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent {


  constructor(private api:ApiService)
  {
    api.viewLeave().subscribe(
      (response)=>
      {
        this.leaves=response;
      }
    )
  }

  leaves:any=[]
  statusvalue:any={}
  readValue=(data:any)=>
  {
    this.statusvalue=1;
    let accept:any={"empId":data,"status":this.statusvalue}
    this.api.updateLeave(accept).subscribe(
      (response:any)=>
      {
        if (response.status=="success") {
          console.log(response)
          console.log(response.status)
          
          alert("success")

          
        } else {
          alert("failed")
          
        }
      }

    )
  }

  rejectValue=(data:any)=>{

    this.statusvalue=-1;
    let accept:any={"empId":data,"status":this.statusvalue}
    this.api.updateLeave(accept).subscribe(
      (response:any)=>
      {
        if (response.status=="success") {
          console.log(response)
          console.log(response.status)
          alert("success")
          
        } else {
          alert("failed")
          
        }
      }

    )
  }


 
  }



