import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { USERNAME_KEY, UUID_KEY, IRI_USER_KEY, expired } from 'src/app/utils/links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this._user.getOneByName(localStorage.getItem(USERNAME_KEY)).then((res:any)=>{
      var result=res['hydra:member'][0]
      localStorage.setItem(UUID_KEY,result.uuid)
      localStorage.setItem(IRI_USER_KEY,result['@id'])
      console.log(result)
    }).catch((err)=>{
      expired(err)
    })
  }

}
