import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REACTION_LINK, generateParams, HEADERS } from 'src/app/utils/links';

class Reaction{
  public reaction:string;
  public user:string;
  public blog:string=null;
  public comment:string=null;
}

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http:HttpClient) { }

  /**
   * @param obj :Reaction
   * Crée une nouvelle reaction
   * @returns Promise<Object>
   * Retourne une promise
   */
  public create(obj:Reaction):Promise<Object>{
    return this.http.post(REACTION_LINK,obj,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param page :number=1
   * Demande plusieurs reactions
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getMany(page:number=1):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }]);
    return this.http.get(REACTION_LINK+params,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param id :string
   * Demande une reaction
   * @returns Promise<Object>
   * Retourne une promise
   */
  public getOne(id:string):Promise<Object>{
    return this.http.get(REACTION_LINK+"/"+id,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param obj :Blog
   * @param id :string
   * Remplace une reaction
   * @returns Promise<Object>
   * Retourne une promise
   */
  public replace(reaction:string,id:string){
    return this.http.put(REACTION_LINK+"/"+id,{
      reaction:reaction
      },{headers:HEADERS})
    .toPromise();
  }
  
  /**
   * @param id :string
   * Supprime une reaction
   * @returns Promise<Object>
   * Retourne une promise
   */
  public remove(id:string){
    return this.http.delete(REACTION_LINK+"/"+id,{headers:HEADERS})
    .toPromise();
  }
}
