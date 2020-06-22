import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER_LINK, generateParams } from 'src/app/utils/links';

class User{
  /**
   * @var username: string
   */
  public username:string;
  /**
   * @var password: string
   */
  public password:string;
  /**
   * @var email: string
   */
  public email:string;
  /**
   * @var roles: Array<string>
   */
  public roles:Array<string>;
  /**
   * @var pseudo: string
   */
  public pseudo:string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }

  /**
   * @param obj: User
   * Crée un nouvel utilisateur dans la base
   * de donnée
   * @returns Promise<Object>
   */
  public create(obj:User):Promise<Object>{
    return this.http.post(USER_LINK,obj).toPromise();
  }

  /**
   * @returns Promise<Object>
   * Recupere tous les utilisateurs
   */
  public getAll():Promise<Object>{
    return this.http.get(USER_LINK)
    .toPromise();
  }

  /**
   * @param id: string
   * Recupere un utilisateur dont
   * l'identifiant est spécifié
   * @returns Promise<Object>
   */
  public getOne(id:string):Promise<Object>{
    var params=generateParams([{key:"id",value:id}])
    return this.http.get(USER_LINK+params)
    .toPromise();
  }

  /**
   * @param id: string
   * Supprime un utilisateur
   * @returns Promise<Object> 
   */
  public remove(id:string):Promise<Object>{
    var params=generateParams([{key:"id",value:id}])
    return this.http.delete(USER_LINK+params)
    .toPromise();
  }

  /**
   * @param obj: User
   * @param id: string
   * Met à jour les informations sur l'utilisateur
   * @returns Promise<Object>
   */
  public update(obj:User,id:string):Promise<Object>{
    var params=generateParams([{key:"id",value:id}])
    return this.http.put(USER_LINK+params,obj)
    .toPromise();
  }
}
