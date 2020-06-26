import { Component, OnInit } from '@angular/core';
import * as $ from "jquery/dist/jquery.min.js";
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  public update_mode=false;

  constructor() { }

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
    $("#decoration").fadeOut(200,()=>{
      $('#user-info').fadeIn(200);
    })
  }

  public user_hide(){
    this.update_mode=false;
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

}
