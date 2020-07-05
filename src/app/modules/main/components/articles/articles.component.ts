import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize.min";
import * as $ from "jquery/dist/jquery.min.js";
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public load_data=true;

  public all=[]

  public recent=[
    {
      title:"Mon titre 1",
      description:"Ma description",
      pseudo:"Test1234",
      email:"example@test.com",
      date:"12/25/2020"
    },
    {
      title:"Mon titre 3",
      description:"Ma description",
      pseudo:"Test1234",
      email:"example@test.com",
      date:"12/25/2020"
    }
  ]

  public my_blog=[
    {
      title:"Mon titre 1",
      description:"Ma description",
      pseudo:"Test1234",
      email:"example@test.com",
      date:"12/25/2020"
    }
  ]

  public data:Array<Object>=this.all;

  public materialboxed;

  constructor(private _blog:BlogService) {}

  ngOnInit(): void {
    var tabs=M.Tabs.init(document.querySelector(".tabs"),{
      onShow:this.tabs_load
    })

    this._blog.getMany().then((res)=>{
      console.log(res)
      this.all=res['hydra:member']
      this.data=this.all
    }).catch((err)=>{
    }).finally(()=>{
      this.load_data=false
    })
    
    $("li.indicator").css({'background-color':'#1976d2'});
    $(".tabs .tab a").css({'background-color':"#ffffff00"});
    tabs.select('all');
    tabs.select('recent');
    tabs.select('my-blogs');
  }

  public tabs_load=(obj)=>{
    this.load_data=true;
    this.data=new Array();
    var id=obj.id;
    switch(id){
      case "all":{
        setTimeout(()=>{
          this.load_data=false;
          this.data=this.all;
        },3000)
        break;
      }
      case "recent":{
        setTimeout(()=>{
          this.load_data=false;
          this.data=this.recent;
        },3000)
        break;
      }
      case "my-blogs":{
        setTimeout(()=>{
          this.load_data=false;
          this.data=this.my_blog;
        },3000)
        break;
      }
    }
  }

  public open=()=>{
    this.materialboxed=M.Materialbox.init(document.querySelectorAll('.materialboxed'));
  }

}
