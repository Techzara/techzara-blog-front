import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize.min";
import * as $ from "jquery/dist/jquery.min.js";
import { BlogService } from 'src/app/services/blog/blog.service';
import { expired } from 'src/app/utils/links';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public load_data=true;
  public data:Array<Object>=[];
  public materialboxed;
  public message="Erreur de Chargemet";

  /*---------------------------------------------------------------------*/

  constructor(private _blog:BlogService) {}

  /*---------------------------------------------------------------------*/

  ngOnInit(): void {
    var tabs=M.Tabs.init(document.querySelector(".tabs"),{
      onShow:this.tabs_load
    })

    this._blog.getMany().then((res)=>{
      this.data=res['hydra:member']
      if(this.data.length==0)this.message="Section Vide"
      console.log(this.data)
    }).catch((err)=>{
      this.message="Erreur de Chargmenent"
      console.log(err)
      expired(err)
      
    }).finally(()=>{
      this.load_data=false
    })
    
    $("li.indicator").css({'background-color':'#1976d2'});
    $(".tabs .tab a").css({'background-color':"#ffffff00"});
    tabs.select('all');
    tabs.select('recent');
    tabs.select('my-blogs');
  }

  /*---------------------------------------------------------------------*/

  public tabs_load=(obj)=>{
    this.load_data=true;
    this.data=new Array();
    var id=obj.id;
    switch(id){
      case "all":{
        this._blog.getMany().then((res)=>{
          this.data=res['hydra:member']
          if(this.data.length==0)this.message="Section Vide"
        }).catch((err)=>{
          this.message="Erreur de Chargmenent"
          expired(err)
        }).finally(()=>{
          this.load_data=false
        })
        break;
      }
      case "my-blogs":{
        this._blog.getMany().then((res)=>{
          this.data=res['hydra:member']
          if(this.data.length==0)this.message="Section Vide"
        }).catch((err)=>{
          this.message="Erreur de Chargmenent"
          expired(err)
        }).finally(()=>{
          this.load_data=false
        })
        break;
      }
    }
  }

  public open=()=>{
    this.materialboxed=M.Materialbox.init(document.querySelectorAll('.materialboxed'));
  }

  public navigate(id){
    location.assign("/home/article?id="+id)
  }

  /*---------------------------------------------------------------------*/

}
