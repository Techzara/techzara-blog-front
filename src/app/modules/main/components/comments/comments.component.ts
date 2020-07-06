import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { expired, IRI_USER_KEY } from 'src/app/utils/links';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public loading=true;

  public text_comment='';

  @Input()
  public iri;

  public comments=[]

  constructor(private _blog:BlogService,private _comment:CommentService) { }

  ngOnInit(): void {
    var params=new URLSearchParams(location.search)
    this._blog.getComments(params.get('id')).then((res)=>{
      this.comments=res['hydra:member']
      console.log(this.comments)
    }).catch((err)=>{
      expired(err)
    }).finally(()=>{
      this.loading=false
    })
  }

  public post_comment(txt){
    this._comment.create({
      user:localStorage.getItem(IRI_USER_KEY),
      blog:this.iri,
      comment:txt
    }).then(()=>{
      location.reload()
    }).catch((err)=>{
      console.log(err)
      expired(err)
    })
  }

}
