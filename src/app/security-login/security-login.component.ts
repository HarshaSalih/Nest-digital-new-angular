import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {

  constructor(private api:ApiService,private route:Router){}

  username=""
  password=""

  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.securityLogin(data).subscribe(
      (response:any)=>
      {
        if (response.status=="success")
        {
          console.log(data)
          localStorage.setItem("userInfo",response.userId)
          this.route.navigate(['/'])
        }
        else{
          alert("login failed")
        }
       
      }
    )
    
    
      
   

   
  }


}
