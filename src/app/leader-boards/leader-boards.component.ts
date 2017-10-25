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
	clicks = [];
	//

  	constructor(
		private signupservice: SignupService,
		private authservice: AuthService,
		private db: AngularFireDatabase){}

	nCnt: number = 0;
	// clickMe(){
	// 	this.nCnt = this.nCnt + 1;
	// 	if(this.nCnt === 3){
	// 		alert('3')
	// 	}
	// 	this.clicks.push(this.nCnt)
	// }

  	// getUser(){
    // 	this.signupservice.getUsers()
    // 	.subscribe(
	// 		(user: any) => console.log(user[0].clicks),
	// 		(error) => console.log(error)
    // 	);
	//   }

	getClicks(){
		this.authservice.userClicks
		return(
			console.log(this.clicks)
			//this.clicks.push(this.clicks)
		)
	}
	ngOnInit() {
	this.signupservice.getUsers()
	.subscribe(
		user => {
		this.user = user }),
		(error) => console.log(error)
	}
}