import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form_login=new FormGroup({
    login:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  public login(){
      console.log(this.form_login.valid)
  }

}
