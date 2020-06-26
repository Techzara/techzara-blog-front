import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER_LINK, generateParams, HEADERS } from 'src/app/utils/links';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';

const CONNEXION_LINK="https://blog.techzara.org​/authentication_token";

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
   * @var pseudo: string
   */
  public pseudo:string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService implements CanActivate {

  constructor(private http:HttpClient,
              private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem("SESSION_TOKEN")==null){
        location.assign("/")
        return false;
    }
    return true;
  }

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
   * @param page:number
   * le nombre de page à prendre en base de donnée
   * @returns Promise<Object>
   * Recupere plusieurs utilisateurs
   */
  public getMany(page:number=1):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }])
    return this.http.get(USER_LINK+params,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param id: string
   * Recupere un utilisateur dont
   * l'identifiant est spécifié
   * @returns Promise<Object>
   */
  public getOne(id:string):Promise<Object>{
    return this.http.get(USER_LINK+"/"+id,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param name:string
   * Retourne un utilisateur à partir de son username
   * @returns Promise<Object>
   */
  public getOneByName(name:string):Promise<Object>{
    var params=generateParams([{
      key:"username",
      value:name
    }])
    return this.http.get(USER_LINK+params,{headers:HEADERS})
    .toPromise();
  }

  /**
   * @param obj: User
   * @param id: string
   * Met à jour les informations sur l'utilisateur
   * @returns Promise<Object>
   */
  public replace(obj:User,id:string):Promise<Object>{
    return this.http.put(USER_LINK+"/"+id,obj,{headers:HEADERS})
    .toPromise();
  }

  public connect(username:string,password:string):Promise<Object>{
    return this.http.post(CONNEXION_LINK,{
      username:username,
      password:password
    }).toPromise();
  }
}
