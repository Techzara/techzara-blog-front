import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  constructor(private user:UserService) {}

  public test(){
    this.user.connect("api","api")
    .then((res)=>{
      console.log("Connecté")
      console.log(res)
    })  
    .catch((err)=>{
      console.log(err)
    })
  }

  public connect(){
    
  }
}
