import { Component, OnInit } from '@angular/core';
import* as M from "materialize-css/dist/js/materialize.min.js";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.Materialbox.init(document.querySelectorAll('.materialboxed'));
  }

}
