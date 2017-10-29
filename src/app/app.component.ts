import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm, Form} from '@angular/forms';
import * as firebase from 'firebase';
import * as admin from "firebase-admin";
import {AuthService} from "./auth/auth.service";
import {AppModule} from "./app.module";
import { Observable } from 'rxjs/Observable';


@Component({
	selector: 'pm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit {
	isLoggedIn: boolean
	constructor(
		private router: Router,
		private authservice: AuthService){}
		//public logo: string = 'Logo will go here';


	ngOnInit(){
		// this.isLoggedIn$ = this.authService.isLoggedIn;

		firebase.initializeApp({
			apiKey: "AIzaSyDh-hrLobQ_kFD11bWacfhUP_ejzKHFY58",
			authDomain: "remempathy-us.firebaseapp.com",
			databaseURL: "https://remempathy-us.firebaseio.com"
		});
		this.authservice.getAuth().subscribe(auth => {
			if (!auth){
				return this.isLoggedIn = false;
			}
			this.isLoggedIn = true;
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
	
	// onLogout() {
	// 	this.authService.logout();
	// }
}
