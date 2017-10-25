import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/RX";
import * as firebase from "firebase";
import {AngularFireDatabaseModule, AngularFireDatabase} from "angularfire2/database";
import {AuthService} from "../auth/auth.service";
import {SignupService} from '../auth/signup.service';

@Component({
  selector: 'app-leader-boards',
  templateUrl: './leader-boards.component.html',
  styleUrls: ['./leader-boards.component.css']
})

export class LeaderBoardsComponent implements OnInit {
  clicks = [];
  
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
      (user: any) => console.log(user[0].clicks),
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