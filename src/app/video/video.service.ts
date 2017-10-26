import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import "rxjs/RX";
import * as firebase from "firebase";
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList} from "angularfire2/database"
import {firebaseConfig} from "../app.module";
import {AuthService} from "../auth/auth.service";


Injectable()
export class VideoService {
	user: any[];
	clicks: number = 0;
	uid = this.authservice.authState.uid;

    constructor(
		private authservice: AuthService,
		private db: AngularFireDatabase
	){}

	//LEADERBOARDS
	userClicks(){
		this.clicks = this.clicks + 1;
		if(this.uid === this.uid && this.clicks){
			console.log(this.clicks)
			return this.clicks
		}
	}

}