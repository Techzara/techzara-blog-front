import { Component, OnInit } from '@angular/core';
import * as $ from "jquery/dist/jquery.min.js";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {JwtHelperService} from "@auth0/angular-jwt";
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public form_post=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    files:new FormControl()
  })

  public form_user=new FormGroup({
    username:new FormControl({value:'',disabled:true},Validators.required),
    pseudo:new FormControl({value:'',disabled:true},Validators.required),
    email:new FormControl({value:'',disabled:true},Validators.required)

  })

  private helper=new JwtHelperService();

  public data_load=false;

  public update_mode=false;

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  public show(){
    var input_files:any=document.getElementById('files');
    var files:Array<File>=input_files.files;
    $("#decoration").fadeOut(200,()=>{
      $('#post').fadeIn(200);
    })
  }

  public user_show(){
    this.data_load=true;
    
    var token=this.helper.decodeToken(localStorage.getItem("SESSION_TOKEN"));
    this._user.getOneByName(token.username)
    .then((res)=>{
      var user=res['hydra:member'][0]
      this.form_user.setValue({
        username:user.username,
        email:user.email,
        pseudo:user.pseudo
      });
      $("#decoration").fadeOut(200,()=>{
        $('#user-info').fadeIn(200);
      })
    })
    .catch((err)=>{

    })
    .finally(()=>{
      this.data_load=false;
    })
  }

  public user_hide(){
    this.update_mode=false;
    this.form_user.disable();
    $("#user-info").fadeOut(200,()=>{
      $('#decoration').fadeIn(200);
    })
  }

  public hide(){
    this.form_post.get("description").reset();
    this.form_post.get("title").reset();
    this.form_post.get("files").reset();
    $('#txt')[0].value='';
    $("#post").fadeOut(200,()=>{
      $('#decoration').fadeIn(200);
    })
  }

  public post() {
    var title=this.form_post.get("title").value;
    var description=this.form_post.get("description").value;
    var input_files:any=document.getElementById('files');
    var files:Array<File>=input_files.files;
  }

  public update_toggle(){
    this.update_mode=!this.update_mode;
    this.form_user.disable();
    if(this.update_mode)this.form_user.enable();
  }

}
