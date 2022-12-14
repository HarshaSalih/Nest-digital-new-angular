import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent {

  constructor(private api:ApiService){}

  empCode=""
  searchData:any=[]

  readValues=()=>
  {
    let data={
      "empCode":this.empCode
  }
  console.log(data)
  this.api.searchSecurity(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid employee code")
        
      } else {
        this.searchData=response
        
      }
    }
  )
  }

  readValue=(id:any)=>
  {
    let data:any={
      "id": id
  }
  this.api.deleteSecurity(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("Deleted succesfully")
        this.searchData=[]
        
        
      }
    }
  )
  }

}
