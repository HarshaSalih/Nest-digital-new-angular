import { Component } from '@angular/core';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {

  empCode=""
  name=""
  username=""
  password=""

  readValues=()=>
  {
    let data:any={"empCode":this.empCode,"name":this.name,"username":this.username,"password":this.password}
    console.log(data)
  }
    



}
