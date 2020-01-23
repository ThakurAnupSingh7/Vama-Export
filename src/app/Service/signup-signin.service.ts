import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {User} from '../registration/registration'




@Injectable({
  providedIn: "root"
})
export class SignupSigninService {
  private _registerUrl = "http://35.173.187.82/aplis/public/api/user/sign-up";

private _loginUrl = "http://35.173.187.82/aplis/public/api/user/sign-in"


  constructor(private http: HttpClient) {}

  Signup(form):Observable<User>{
    return this.http.post<User>(this._registerUrl, form,{
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }


  Signin(user){
   return this.http.post<any>(this._loginUrl, user)
  }
}


