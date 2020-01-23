import { Component, OnInit } from '@angular/core';
import { SignupSigninService } from '../Service/signup-signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData={}

  constructor( private _service : SignupSigninService) { }

  ngOnInit() {
  }
  loginUser(){
    
    console.log(this.loginUserData)
    this._service.Signin(this.loginUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
