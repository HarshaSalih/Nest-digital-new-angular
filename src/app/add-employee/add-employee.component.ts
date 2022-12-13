import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empCode=""
  name=""
  designation=""
  salary=""
  phone=""
  email=""
  username=""
  password=""
  confirmPassword=""

  constructor(private api:ApiService){}

  readvalues=()=>
 {
  let data:any={"empCode":this.empCode,"name":this.name,"designation":this.designation,"salary":this.salary,"phone":this.phone,"email":this.email,"username":this.username,"password":this.password,"confirmPassword":this.confirmPassword}
  console.log(data)
  this.api.addEmployee(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success")
      {
        alert("Employee added successfully")
        this.empCode=""
        this.name=""
        this.designation=""
        this.salary=""
        this.phone=""
        this.email=""
        this.username=""
        this.password=""
        this.confirmPassword=""
      }
      else{
        alert("Something went wrong")
      }
    }
  )
}

}


