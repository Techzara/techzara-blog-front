import { Injectable } from '@angular/core';
import { generateParams, TAG_LINK, HEADERS } from 'src/app/utils/links';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  /**
   * @param name :string
   * Crée une nouveau tag
   * @returns Promise<Object>
   * Retourne une promise
   */
  public create(name:string):Promise<Object>{
    return this.http.post(TAG_LINK,name,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param page :number=1
   * Demande plusieurs tags
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getMany(page:number=1):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }]);
    return this.http.get(TAG_LINK+params,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param id :string
   * Demande un tag
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getOne(id:string):Promise<Object>{
    return this.http.get(TAG_LINK+'/'+id,{headers:HEADERS})
    .toPromise();
  }
  
  /**
   * @param id :string
   * Supprime un tag
   * @returns Promise<Object>
   * Retourne une promise
   */
  public remove(id:string){
    return this.http.delete(TAG_LINK+'/'+id,{headers:HEADERS})
    .toPromise();
  }
}
