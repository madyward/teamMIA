import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
    public logo: string = 'Logo will go here';
    ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyDh-hrLobQ_kFD11bWacfhUP_ejzKHFY58",
        authDomain: "remempathy-us.firebaseapp.com"
      });
    }
}