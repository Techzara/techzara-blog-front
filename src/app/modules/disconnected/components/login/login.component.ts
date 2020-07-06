import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TOKEN_KEY, USERNAME_KEY, UUID_KEY, IRI_USER_KEY } from 'src/app/utils/links';

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

  public loading=false;

  public error:string;
  private helper=new JwtHelperService();

  constructor(private _user:UserService) { }

  ngOnInit(): void {
    
  }

  public login(){
      this.loading=true;
      var login=this.form_login.get("login").value;
      var password=this.form_login.get('password').value;
      this._user.connect(login,password)
      .then((res:any)=>{
        this.clear();
        localStorage.setItem(TOKEN_KEY,res.token);
        var token=this.helper.decodeToken(localStorage.getItem(TOKEN_KEY));
        localStorage.setItem(USERNAME_KEY,token.username);
        location.assign('/home')

      })
      .catch((err)=>{
        if(err.status==0)this.error="Erreur de connexion,vérifier que vous etes connecté à internet."
        else this.error="Erreur de mot de passe ou de nom d'utilisateur."
      }).finally(()=>{
        this.loading=false;
      })
  }

  public clear(){
    this.error='';
  }

}
