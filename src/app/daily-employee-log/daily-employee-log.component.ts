import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-employee-log',
  templateUrl: './daily-employee-log.component.html',
  styleUrls: ['./daily-employee-log.component.css']
})
export class DailyEmployeeLogComponent {

  constructor(private api:ApiService){
    api.viewEmployeeLog().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValues=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.viewDailyEmployeeLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("Invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]

}
