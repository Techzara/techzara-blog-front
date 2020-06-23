import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { BlogService } from '../services/blog/blog.service';
import * as $ from 'jquery/dist/jquery.min';
import { HEADERS } from '../utils/links';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public username:string;
  public password:string;
  public status:string="{{LOG}}";
  public color:string="black-text";

  constructor(private user:UserService,
              private blog:BlogService) { }

  ngOnInit(): void {

  }

  public connect(){
    this.user.connect(this.username,this.password)
    .then((res)=>{
      this.status="Connexion réussie";
      this.color="green-text";
    })
    .catch((err)=>{
      this.status="Connexion Echoué";
      this.color="red-text";
    })
  }
}
