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
}
