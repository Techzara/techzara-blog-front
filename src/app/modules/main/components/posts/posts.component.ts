import { Component, OnInit } from '@angular/core';
import * as $ from "jquery/dist/jquery.min.js";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {JwtHelperService} from "@auth0/angular-jwt";
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { BlogService } from 'src/app/services/blog/blog.service';
import { MediaobjectService } from 'src/app/services/mediaobject/mediaobject.service';
import { USERNAME_KEY, TOKEN_KEY } from 'src/app/utils/links';

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
    email:new FormControl({value:'',disabled:true},Validators.required),
    password:new FormControl({value:'',disabled:true},Validators.required)
  })
  public data_load=false;
  public update_mode=false;
  private id_user;

  public loading=false;
  
  /*---------------------------------------------------------------------*/

  constructor(private _user:UserService,private _blog:BlogService,private _media:MediaobjectService) { }
  
  /*---------------------------------------------------------------------*/
  
  ngOnInit(): void {
  }

  /*---------------------------------------------------------------------*/

  //Affiche les option de postage de blog
  public show(){
    var input_files:any=document.getElementById('files');
    var files:Array<File>=input_files.files;
    $("#decoration").fadeOut(200,()=>{
      $('#post').fadeIn(200);
    })
  }

  // Charge les données de l'utilisateur et l'affiche
  public user_show(){
    this.data_load=true;
    this._user.getOneByName(localStorage.getItem(USERNAME_KEY))
    .then((res)=>{
      var user=res['hydra:member'][0]
      this.id_user=user.uuid
      this.form_user.setValue({
        username:user.username,
        email:user.email,
        pseudo:user.pseudo,
        password:""
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

  // Post un blog.
  public post() {
    this.loading=true;
    var title=this.form_post.get("title").value;
    var description=this.form_post.get("description").value;
    var input_files:any=document.getElementById('files');
    var files:Array<File>=input_files.files;
    this.send_media(files).then((images)=>{
      this._blog.create({
        title:title,
        description:description,
        images:images,
        tags:[],
        user:localStorage.getItem(USERNAME_KEY)
      }).then((res:any)=>{
        // doStuff()
        location.reload()
      }).catch((err)=>{
        // doStuff()
        console.log(err)
      }).finally(()=>{this.loading=false})
    }).catch((err)=>{
      this.loading=false;
    })
    
  }

  public update_toggle(){
    this.update_mode=!this.update_mode;
    this.form_user.disable();
    if(this.update_mode)this.form_user.enable();
  }

  // Met à jour les données de l'utilisateur.
  public update(){
    var username=this.form_user.get("username").value;
    var pseudo=this.form_user.get("pseudo").value;
    var email=this.form_user.get("email").value;
    var password=this.form_user.get("password").value;

    this._user.replace({
      username:username,
      pseudo:pseudo,
      email:email,
      password:password
    },this.id_user).then((res:any)=>{
      localStorage.setItem(USERNAME_KEY,username)
      this.user_hide();
    }).catch((err)=>{
      
    })
  }

  /**
   * 
   * @param files tableau de fichier
   * Envoi de media au server de maniere asynchrone.
   */
  public async send_media(files:Array<File>){
    var result=[]
    for(let i=0;i<files.length;i++){
      try{
        var res:any=await this._media.create(files[i]);
        result.push(res.contentUrl)
      }catch(e){
        throw(e)
      }
    }
    return result
  }

}
