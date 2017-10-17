import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import * as admin from "firebase-admin";
import {AuthService} from "./auth/auth.service";
import {AppModule} from "./app.module";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit {
  constructor(private router: Router){}
  //public logo: string = 'Logo will go here';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDh-hrLobQ_kFD11bWacfhUP_ejzKHFY58",
      authDomain: "remempathy-us.firebaseapp.com",
      databaseURL: "https://remempathy-us.firebaseio.com"
    });
  }
  signOutToken(){
    firebase.auth().signOut().then(function(){
      console.log("Sign out successful.");
      }).then(res => {
        console.log(res);
        this.router.navigate(['/home']);
      })
    }
  }
