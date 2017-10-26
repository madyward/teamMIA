import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/RX";
import * as firebase from "firebase";
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {AuthService} from "../auth/auth.service";
import {SignupService} from '../auth/signup.service';

@Component({
  selector: 'app-leader-boards',
  templateUrl: './leader-boards.component.html',
  styleUrls: ['./leader-boards.component.css']
})

export class LeaderBoardsComponent implements OnInit {
	user: any[];
	clicks: number = 0;

  	constructor(
		private signupservice: SignupService,
		private authservice: AuthService,
		private db: AngularFireDatabase){}

	// getClicks(){
	// 	this.authservice.userClicks
	// 	return(
	// 		console.log(this.clicks)
	// 		//this.clicks.push(this.clicks)
	// 	)
	// }
	ngOnInit() {
	this.signupservice.getUsers()
	.subscribe(
		user => {
		this.user = user }),
		(error) => console.log(error)
	}
}