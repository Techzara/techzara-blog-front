import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlePageService implements CanActivate{

  constructor() { }
  canActivate(route, state): boolean {
    var params=new URLSearchParams(location.search)
    if(params.get('id'))return true;
    else location.assign("/home")
  }
}
