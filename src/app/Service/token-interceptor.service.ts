import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SignupSigninService } from './signup-signin.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector : Injector) { }

  intercept(req, next){
    let signupSigninService = this._injector.get(SignupSigninService)
    let tokenizedReq =req.clone({
      setHeaders:{
        Authorization:`Bearer ${signupSigninService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
