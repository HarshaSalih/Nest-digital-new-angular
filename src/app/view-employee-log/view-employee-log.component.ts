import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-log',
  templateUrl: './view-employee-log.component.html',
  styleUrls: ['./view-employee-log.component.css']
})
export class ViewEmployeeLogComponent {

  constructor(private api:ApiService){
    api.viewEmployeeLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}
