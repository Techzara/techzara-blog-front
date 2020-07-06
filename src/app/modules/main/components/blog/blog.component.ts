import { Component, OnInit } from '@angular/core';
import* as M from "materialize-css/dist/js/materialize.min.js";
import { BlogService } from 'src/app/services/blog/blog.service';
import { expired } from 'src/app/utils/links';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blog;

  constructor(private _blog:BlogService) { }

  ngOnInit(): void {
    M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    var params=new URLSearchParams(location.search)
    this._blog.getOne(params.get("id")).then((res)=>{
      this.blog=res
      console.log(res)
    }).catch((err)=>{
      expired(err)
    })
  }

}
