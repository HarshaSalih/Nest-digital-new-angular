import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {

  empId=""
  date=""
  enterDateTime=""
  exitDateTime=""


  constructor(private api:ApiService){}


  readValues=()=>
  {
    let data:any={"empId":this.empId,"date":this.date,"enterDateTime":this.enterDateTime,"exitDateTime":this.exitDateTime}
    console.log(data)
    this.api.addEmployeeLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Successfully added")
          this.empId=""
          this.date=""
          this.enterDateTime=""
          this.exitDateTime=""

        } else {
          alert("Something went wrong")
        }
      }
    )
  }


}
