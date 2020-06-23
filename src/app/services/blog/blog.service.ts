import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BLOG_LINK, generateParams, HEADERS } from 'src/app/utils/links';

class Blog{
  public title:string;
  public description:string;
  public images:Array<string>;
  public tags:Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

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
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.get(BLOG_LINK+params,{headers:HEADERS})
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
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.put(BLOG_LINK+params,obj,{headers:HEADERS})
    .toPromise();
  }
  
  /**
   * @param id :string
   * Supprime un blog
   * @returns Promise<Object>
   * Retourne une promise
   */
  public remove(id:string){
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.delete(BLOG_LINK+params,{headers:HEADERS})
    .toPromise();
  }
  
}
