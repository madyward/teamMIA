import {SignupService} from '../auth/signup.service';
import {Component, OnInit} from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import * as firebase from "firebase";
import {Observable} from "rxjs/RX";
import {AuthService} from "../auth/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any[]


constructor(private signupservice: SignupService,
  private db: AngularFireDatabase){}
    ngOnInit() {
      this.signupservice.getUsers()
      .subscribe(
        user => {
          this.user = user }),
          
         
  
       (error) => console.log(error)
    
    }

  msg = '';
  nCnt: number = 0;
  clickMe(){
      this.nCnt = this.nCnt + 1;
      this.msg = "Clicked: " + this.nCnt;

      if(this.nCnt === 3){
       alert('3')
      }
     
    }


  }

