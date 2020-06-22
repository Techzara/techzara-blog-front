import { Component, OnInit } from '@angular/core';
import * as $ from "jquery/dist/jquery.min.js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#search").focus(()=>{
      $("#search-icon").css({display:"none"})
    })
    $("#search").blur(()=>{
      var val:any=$("#search")[0].value;
      if(val=="")$("#search-icon").css({display:"block"});
    })
  }

}
