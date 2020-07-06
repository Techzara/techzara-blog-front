import { Component, OnInit } from '@angular/core';
import { logout } from 'src/app/utils/links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public q="";
  
  constructor() { }

  ngOnInit(): void {}

  public logout(){
    logout()
  }
}
