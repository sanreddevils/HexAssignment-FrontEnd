import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {  Headers } from '@angular/http'; 
import {RequestOptions, Request, RequestMethod,RequestOptionsArgs} from '@angular/http';
import { Constants } from '../app/constants';
import {SoftSkillsModel} from '../app/soft-skill.model';
import 'rxjs/add/operator/map'

@Injectable()
export class SoftskilldataService {
  apiUrl: string = Constants.API_ENDPOINT+"api/SoftSkills";// Web API URL 
  softSkills:SoftSkillsModel[];
  private headers: Headers;  
  private options: RequestOptionsArgs;
  constructor(private _http:Http) {
 
    this.headers = new Headers({ 'Authorization':'Bearer '+ localStorage.getItem('access_token') });  
    this.options = new RequestOptions({ headers: this.headers });
   }
  

   

  getAllSoftSkills(userid:string)
  {  
   //return <Observable<any[]>>this._http.get(this.apiUrl) 
  //  let softSkillHeaders = new HttpHeaders();
  //  softSkillHeaders.append('Content-Type', 'application/json');
  //  softSkillHeaders.append('Authorization',"Bearer "+localStorage.getItem('access_token'))
  //  console.log(softSkillHeaders);
  //  this.options = new RequestOptions({ headers: HttpHeaders); 
   console.log("Called getAllSoftSkills()");
   

   let myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
   myHeaders.append('Authorization',"Bearer "+localStorage.getItem('access_token')) ;   
   let myParams = new URLSearchParams();
  //  myParams.append('UserId', userid);	
   let options = new RequestOptions({ headers: myHeaders, params: myParams });
   return this._http.get(this.apiUrl + '?UserId='+userid, options).map((data:Response) =>
   {
     return data.json() as SoftSkillsModel[];
   }).toPromise().then(x =>{this.softSkills =x})

   
  
   //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));  
   } 
   
   getSkills(userid:number): Observable<SoftSkillsModel[]> {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization',"Bearer "+localStorage.getItem('access_token')) ;   
    let myParams = new URLSearchParams();
   //  myParams.append('UserId', userid);	
    let options = new RequestOptions({ headers: myHeaders, params: myParams });
    return this._http.get(this.apiUrl + '?UserId='+userid, options)    
        .map(res => { 
          return res.json().map(item => { 
            return new SoftSkillsModel( 
                item.id,
                item.skillSet,
                item.skillValue,
               
            );
          });
        });
  }


}
