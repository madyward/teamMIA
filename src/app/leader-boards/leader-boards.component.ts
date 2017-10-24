import { LeaderService } from './leader.service';
import {Component, OnInit} from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import {Observable} from "rxjs/RX";

@Component({
  selector: 'app-leader-boards',
  templateUrl: './leader-boards.component.html',
  styleUrls: ['./leader-boards.component.css']
})


export class LeaderBoardsComponent implements OnInit {
userList = [];

constructor(private leaderService: LeaderService ){}

// getUsers(
//   email: string, 
//   fname: string,
//   lname: string,
// ){
//   this.userList.push({
//     email : email,
//     fname : fname,
//     lname : lname
//   });
// }



  nCnt: number = 0;
  clickMe(){
      this.nCnt = this.nCnt + 1;
      

      if(this.nCnt === 3){
       alert('3')
      }
     
    }

getUser(){
  this.leaderService.showUsers()
  .then(

(userList: any[]) => console.log(userList),
    (error) => console.log(error)
  );
}
  ngOnInit() {
    this.leaderService.showUsers()
    .then(
  
  (userList: any[]) => console.log(userList),
      (error) => console.log(error)
    );
  }
}
