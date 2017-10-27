import {Component, OnInit} from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import {AuthService} from "../auth/auth.service";
import {Injectable, Provider} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList ,AngularFireObject} from "angularfire2/database";
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {SignupService} from "../auth/signup.service";


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	user: any[];
	clicks: number = 0;
	//uid = this.authservice.authState.uid;
	constructor(
		private authservice: AuthService
	) {}

  	//LEADERBOARDS
	  getClicks(){
		this.authservice.userClicks
		return(
			console.log(this.clicks)
			//this.clicks.push(this.clicks)
		)
	}  
    
	ngOnInit() {}
}