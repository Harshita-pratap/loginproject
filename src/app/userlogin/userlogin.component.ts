import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  email!:string;
  password!: string;
  
  areCredentialsInvalid = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
   logInUser()
   {
     if(this.email == "harshita@gmail.com" && this.password == "1234"){
      this.router.navigateByUrl('/loginpage');
     }
     else{
       this.areCredentialsInvalid=true;
     }
   }

}