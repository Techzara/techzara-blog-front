import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize.min";
import * as $ from "jquery/dist/jquery.min.js";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public load_data=false;

  public all=[
        {
          title:"Mon titre 1",
          description:"Ma description",
          pseudo:"Test1234",
          email:"example@test.com",
          date:"12/25/2020"
        },
        {
          title:"Mon titre 2",
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
        },
        {
          title:"Mon titre 3",
          description:"Ma description",
          pseudo:"Test1234",
          email:"example@test.com",
          date:"12/25/2020",
          url:"../../../../../assets/img4.jpg"
        }
]

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

  constructor() {}

  ngOnInit(): void {
    var tabs=M.Tabs.init(document.querySelector(".tabs"),{
      onShow:this.tabs_load
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
