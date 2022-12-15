import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-visitor-log',
  templateUrl: './view-visitor-log.component.html',
  styleUrls: ['./view-visitor-log.component.css']
})
export class ViewVisitorLogComponent {

  constructor(private api:ApiService){
    api.viewVisitorLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}
