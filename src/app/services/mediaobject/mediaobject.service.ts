import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MEDIA_LINK, generateParams } from 'src/app/utils/links';

@Injectable({
  providedIn: 'root'
})
export class MediaobjectService {

  constructor(private http:HttpClient) { }
  
  public create(file:File):Promise<Object>{
    var data=new FormData();
    data.append("file",file);
    return this.http.post(MEDIA_LINK,data)
    .toPromise();

  }

  public getMany(page:number):Promise<Object>{
    var params=generateParams([{
      key:"page",
      value:page.toString()
    }])
    return this.http.get(MEDIA_LINK+params)
    .toPromise();
  }

  public getOne(id:string):Promise<Object>{
    var params=generateParams([{
      key:"id",
      value:id
    }])
    return this.http.get(MEDIA_LINK+params)
    .toPromise();
  }
  
}
