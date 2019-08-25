import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../users/user';
import { Repo } from '../repo/repo';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  userProfile:User [] = [];
  userRepo:Repo [] = [];
  
  url = 'https://api.github.com/users/';  
  token = '?access_token='+environment.APIKEY;

  constructor(private http:HttpClient) { }
  myProfile(userName:string){
    interface data {
      name:string;
      avatar_url:string;
      followers_url:string;
      following_url:string;
      bio:string;
      login:string;
    }
    let promise =  new Promise ((resolve, reject)=>{
      this.userProfile = [];
      this.http.get<data>(this.url+userName+this.token).toPromise().then(
        (result)=>{
          console.log(result);
          this.userProfile.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
  }
  myRepo(userName:string){
    interface repoData {
      name: string;
      html_url: string;
      description:string;
      language:string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.userRepo = [];
      this.http.get<repoData>(this.url+userName+"/repos?"+this.token).toPromise().then(
        (result)=>{
          this.userRepo.push(result);
          resolve();
        },
        (error)=>{
          reject();
        })
    })
    return promise;
}
}