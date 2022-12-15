import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-visitor-log',
  templateUrl: './daily-visitor-log.component.html',
  styleUrls: ['./daily-visitor-log.component.css']
})
export class DailyVisitorLogComponent {

  constructor(private api:ApiService){
    api.viewVisitorLog().subscribe(
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
    this.api.viewDailyVisitorLog(data).subscribe(
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
