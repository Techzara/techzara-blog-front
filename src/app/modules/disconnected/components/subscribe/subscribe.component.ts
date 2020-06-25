import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

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

  public loading=false;

  public error="";

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  public subscribe(){
    if(this.form_subscribe.get('password').value==this.form_subscribe.get('confirmation').value){
      this.loading=true;
      this._user.create({
        username:this.form_subscribe.get("username").value,
        pseudo:this.form_subscribe.get("pseudo").value,
        password:this.form_subscribe.get("password").value,
        email:this.form_subscribe.get("email").value
      })
      .then((res:any)=>{
        this.clear();
        location.assign("/");
      })
      .catch((err)=>{
        if(err.status==0)this.error="Erreur de connexion,vérifiez votre connexion internet.";
        else this.error="Erreur de donnée du formulaire.";
      })
      .finally(()=>{
        this.loading=false;
      })
    }else this.error="Erreur de confirmation de mot de passe."
  }

  public clear(){
    this.error='';
  }

}
