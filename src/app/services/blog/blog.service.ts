import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BLOG_LINK, generateParams, HEADERS } from 'src/app/utils/links';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

class Blog{
  public title:string;
  public description:string;
  public images:Array<string>;
  public tags:Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService implements CanActivate {

  constructor(private http:HttpClient,
              private _router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
    if(localStorage.getItem("SESSION_TOKEN")!=null){
      location.assign('/home');
      return false;
    }
    console.log("coucou");
    return true;
  }

  /**
   * @param obj :Blog
   * Crée un nouveau blog
   * @returns Promise<Object>
   * Retourne une promise
   */
   public create(obj:Blog):Promise<Object>{
    return this.http.post(BLOG_LINK,obj,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param page :number=1
   * Demande plusieurs blogs
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getMany(page:number=1):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }]);
    return this.http.get(BLOG_LINK+params,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param id :string
   * Demande un Blog
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getOne(id:string):Promise<Object>{
    return this.http.get(BLOG_LINK+"/"+id,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param obj :Blog
   * @param id :string
   * Met à jour les données d'un blog
   * @returns Promise<Object>
   * Retourne une promise
   */
  public replace(obj:Blog,id:string){
    return this.http.put(BLOG_LINK+"/"+id,obj,{headers:HEADERS})
    .toPromise();
  }
  
  /**
   * @param id :string
   * Supprime un blog
   * @returns Promise<Object>
   * Retourne une promise
   */
  public remove(id:string){
    return this.http.delete(BLOG_LINK+"/"+id,{headers:HEADERS})
    .toPromise();
  }
  
}
