import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicErrorStateMatcher} from "../../utils/BasicErrorStateMatcher";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new BasicErrorStateMatcher();
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.loginForm.controls);

  }

}
