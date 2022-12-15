import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {

  empId=""
  type=""
  remarks=""
  fromDate=""
  toDate=""
  applyDate=""
  
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"empId":this.empId,"type":this.type,"remarks":this.remarks,"fromDate":this.fromDate,"toDate":this.toDate,"applyDate":this.applyDate}
    console.log(data)
    this.api.applyLeave(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Leave added successfully")
          this.empId=""
          this.type=""
          this.remarks=""
          this.fromDate=""
          this.toDate=""
          this.applyDate=""
         

        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
