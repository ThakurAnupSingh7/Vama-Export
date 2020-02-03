import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignupSigninService } from './signup-signin.service';


@Injectable()

export class AuthGuard implements CanActivate {
 
  constructor( private _sinupsigninservice : SignupSigninService,private _router : Router){ }
  
  canActivate():boolean{
    if (this._sinupsigninservice.loggedIn()){
      return true
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
}
