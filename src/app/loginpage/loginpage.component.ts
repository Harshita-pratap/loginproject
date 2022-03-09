import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  userForm:FormGroup;
  listData:any;
  defaultList:any;
  selectedDegree :string ='';
  check=false;

  constructor(private fb:FormBuilder ) {
    this.listData = [];
    this.defaultList =[
      {
        name:"Harshita",
        college:"Hamdard",
        degree:"B-Tech",
        Specialization:"Java"
      }
    ]
     
    this.userForm = this.fb.group({
      name : '',
      college : '',
      degree: '',
      Specialization: ''
    })

   }
   addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    console.log(this.listData);
  }
  reset(){
    this.userForm.reset();
  }
  
  selectChangeHandler(event :any){
    this.selectedDegree = event.target.value;
    
  }
  requirement(event){
    this.check=true;

  }
 checkValidity(): boolean {
    if (this.check==true) {
      return true;
   }
  else {
      return false;
   }
  }


  ngOnInit(): void {
    console.log(this.defaultList);
    //this.listData.push(this.defaultList.value);
    
  }

}
