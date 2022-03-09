import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path : '', component:UserloginComponent},
  {path:'loginpage', component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
