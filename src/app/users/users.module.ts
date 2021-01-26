import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthzComponent } from './authz/authz.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthzComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    AuthzComponent
  ]
})
export class UsersModule { }
