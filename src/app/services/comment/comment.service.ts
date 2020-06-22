import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { COMMENT_LINK,generateParams } from 'src/app/utils/links';

class Comment{
  public comment:string;
  public blog:string;
  public user:string;

}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  
  /**
   * @param obj :Comment
   * Crée un nouveau commentaire
   * @returns Promise<Object>
   * Retourne une promise
   */
  public create(obj:Comment):Promise<Object>{
    return this.http.post(COMMENT_LINK,obj)
    .toPromise();
  }

  /**
   * @param page :number=1
   * Demande plusieurs commentaire
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getMany(page:number=1):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }]);
    return this.http.get(COMMENT_LINK+params)
    .toPromise();
  }

  /**
   * @param id :string
   * Demande un commentaire
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getOne(id:string):Promise<Object>{
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.get(COMMENT_LINK+params)
    .toPromise();
  }

  /**
   * @param comment :string
   * @param id :string
   * Met à jour les données d'un commentaire
   * @returns Promise<Object>
   * Retourne une promise
   */
  public replace(comment:string,id:string){
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.put(COMMENT_LINK+params,{
      comment:comment
    })
    .toPromise();
  }
  
  /**
   * @param id :string
   * Supprime un commentaire
   * @returns Promise<Object>
   * Retourne une promise
   */
  public remove(id:string){
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.delete(COMMENT_LINK+params)
    .toPromise();
  }
}
