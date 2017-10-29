import {Component, OnInit} from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import * as firebase from "firebase";
import {Observable} from "rxjs/RX";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-leader-boards',
  templateUrl: './leader-boards.component.html',
  styleUrls: ['./leader-boards.component.css']
})

export class LeaderBoardsComponent implements OnInit {
	users: any[];
	clicks: number = 0;

  	constructor(
		private authservice: AuthService,
		private db: AngularFireDatabase){}

	ngOnInit() {
	this.authservice.getUsers()
	.subscribe(
		user => {
		this.users = user }),
		(error) => console.log(error)
	}
	//this.authservice.getClicks().subscribe
}