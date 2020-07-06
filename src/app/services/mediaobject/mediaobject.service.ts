import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MEDIA_LINK, generateParams, HEADERS, TOKEN_KEY } from 'src/app/utils/links';

@Injectable({
  providedIn: 'root'
})
export class MediaobjectService {

  constructor(private http:HttpClient) { }
  
  public create(file:File):Promise<Object>{
    var formdata:FormData=new FormData();
    formdata.append("file",file);
    return this.http.post(MEDIA_LINK,formdata,{headers:{
      'Authorization':'Bearer '+localStorage.getItem(TOKEN_KEY)
    }})
    .toPromise();
  }

  public getMany(page:number):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }])
    return this.http.get(MEDIA_LINK+params,{headers:HEADERS})
    .toPromise();
  }

  public getOne(id:string):Promise<Object>{
    return this.http.get(MEDIA_LINK+"/"+id,{headers:HEADERS})
    .toPromise();
  }
  
}
