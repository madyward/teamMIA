import {SignupService} from '../auth/signup.service';
import {Component, OnInit} from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import {Observable} from "rxjs/RX";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-leader-boards',
  templateUrl: './leader-boards.component.html',
  styleUrls: ['./leader-boards.component.css']
})

export class LeaderBoardsComponent implements OnInit {
userList = [];

constructor(private signupservice: SignupService ){}

  nCnt: number = 0;
  clickMe(){
      this.nCnt = this.nCnt + 1;
      if(this.nCnt === 3){
       alert('3')
      }
  }
  getUser(){
    this.signupservice.getUsers()
    .subscribe(
      (user: any) => console.log(user[0].company),
      // (user: any) => console.log(user.data.company),
      (error) => console.log(error)
    );
  }
  ngOnInit() {
    this.signupservice.getUsers()
    .subscribe(
      (user: any[]) => console.log(user),
      (error) => console.log(error)
    );
  }
}