import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize.min";
import * as $ from "jquery/dist/jquery.min.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.Tabs.init(document.querySelector(".tabs"))
    $("li.indicator").css({'background-color':'#1976d2'});
  }

}
