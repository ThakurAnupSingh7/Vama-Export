import { Component, OnInit } from '@angular/core';
import { SignupSigninService } from '../Service/signup-signin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData={}

  constructor( private _service : SignupSigninService, private _router : Router) { }

  ngOnInit() {
  }
  loginUser(){
    
    console.log(this.loginUserData)
    this._service.Signin(this.loginUserData)
    .subscribe(
      res=> {
         console.log(res)
      localStorage.setItem('token', res.token),
      this._router.navigate(["/item-master"])
    },
      err=>console.log(err)
    )
  }
}
