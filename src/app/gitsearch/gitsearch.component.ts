import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';
import { User } from '../users/user';
import { Repo } from '../repo/repo';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  
  myUsers: User [];
  myRepos:Repo [];

  constructor(private http:HttpServiceService) { }

  ngOnInit() {
    this.myName('Hulian2000');
  }
  myName(userName){
    this.http.myProfile(userName).then(
      (success)=>{
        this.myUsers=this.http.userProfile;
        console.log(this.myUsers)
      },
      (error)=>{
        console.log(error)
      });
      this.http.myRepo(userName).then(
        (success)=>{
          this.myRepos =this.http.userRepo;  
          console.log(this.myRepos);
        },
        (error)=>{
          console.log(error)
        });
  }

}
