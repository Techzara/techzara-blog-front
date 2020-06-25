import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public form_subscribe=new FormGroup({
    pseudo:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmation:new FormControl('',Validators.required),
    agree:new FormControl(false,Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  public subscribe(){
    
  }

}
