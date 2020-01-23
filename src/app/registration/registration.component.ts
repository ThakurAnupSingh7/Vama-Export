import { Component, OnInit } from '@angular/core';
import { SignupSigninService } from '../Service/signup-signin.service';
import { NgForm, FormBuilder, FormGroup} from '@angular/forms';

import {User} from '../registration/registration'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
   
  form;
 
 constructor( private _service:SignupSigninService, private fb : FormBuilder) { }

  ngOnInit() {
    this.form=this.fb.group({
      first_name: [''],
    last_name: [''],
    mobile: [''],
    email:[''],
    age: [''],
    password: [''],
    });
  }

 onSubmit(form) {
    var json= JSON.stringify(this.form.value);
    this._service.Signup(json)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
}

}


