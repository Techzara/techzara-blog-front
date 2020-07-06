import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService implements CanActivate {


  canActivate(route, state): boolean {
    var params=new URLSearchParams(location.search)
    if(params.get('q'))return true;
    else location.assign("/home")
  }


  constructor() { }
}
