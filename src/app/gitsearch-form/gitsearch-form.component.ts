import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {

  @Output () emitUser = new EventEmitter<any>()

  gitUser: string;
  user(){
    //console.log(this.gitUser)
    this.emitUser.emit(this.gitUser)
  }

  constructor() { }

  ngOnInit() {
  }

}
