import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/RX";
import * as firebase from "firebase";
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList} from "angularfire2/database"
import {AuthService} from "../auth/auth.service";
import {VideoService} from "./video.service";

@Component({
	selector: 'app-video',
	templateUrl: './video.component.html',
	styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
	// users: Observable<any[]>;
	// usersDB: AngularFireList<any>;
	user: any[];
	clicks: number = 0;
	// uid = this.authservice.authState.uid;

	videos = [
		{ url: "https://www.youtube.com/embed/MXTd8xd_f8s", picture: "https://i.ytimg.com/vi/MXTd8xd_f8s/maxresdefault.jpg", patient: "Julie Flygare", condition: "Narcolepsy"},
		{ url: "https://www.youtube.com/embed/3HuxRDX0kbs", picture: "https://i.ytimg.com/vi/rZ-b1omWXH4/maxresdefault.jpg", patient: "Ryan Prior", condition: "Chronic Fatigue Syndrom"},
		{ url: "https://www.youtube.com/embed/fNKfakkH8Yg", picture: "http://storytelling.healthcentral.com/encoded/56ac223a4ee9b1a6393515f0/image/62ac6fa3-efdd-40fc-875b-2fba99b96682_leslie_Rott_hero2.jpg", patient: "Leslie Rott", condition: "Lupus"}    
	];
	videos2 = [
		{ url: "https://www.youtube.com/embed/aDv3_L7c0xo", picture: "https://i2.wp.com/medicinex.stanford.edu/wp-content/uploads/2014/02/nikki_estanol_1920_10801.jpg", patient: "Nicole Estanol", condition: "Juvenile Rheumatoid Arthritis"},
		{ url: "https://www.youtube.com/embed/9NFfznRillE", picture: "https://i.ytimg.com/vi/9NFfznRillE/maxresdefault.jpg", patient: "Liza Bernstein", condition: "Breast Cancer"},
		{ url: "https://www.youtube.com/embed/Z4zRJFQhDCo", picture: "https://i2.wp.com/medicinex.stanford.edu/wp-content/uploads/conference/cache/wide_4806.jpg", patient: "Devon Low", condition: "COPD"}
	];
	videos3 = [
		{ url: "https://www.youtube.com/embed/_Q8WjBj2j_s", picture: "http://cdn1.bostonmagazine.com/wp-content/uploads/2016/02/Amy-Reed-Hooman-Noorchashm-sm.jpg", patient: "Hooman Noorchashm", condition: "Leiomyosarcoma"},
		{ url: "https://www.youtube.com/embed/1KyYQfKHLkI", picture: "https://i.ytimg.com/vi/1KyYQfKHLkI/maxresdefault.jpg", patient: "Vanessa Carter", condition: "Antibiotic Resistance"},
		{ url: "https://www.youtube.com/embed/pfAvKvbutOo", picture: "http://media.philly.com/images/tj_scan2_results_600.jpg", patient: "T.J. Sharpe", condition: "Melanoma"}
	];
	videos4 =[
		{ url: "https://www.youtube.com/embed/rP6WHiQlOSk", picture: "https://i.ytimg.com/vi/rP6WHiQlOSk/maxresdefault.jpg", patient: "Annie Kramer-Golinkoff", condition: "Multiple Conditions"},
		{ url: "https://www.youtube.com/embed/nyK-tCWZv_Y", picture: "http://andreawilsonwoods.com/wp-content/uploads/2016/07/DressthinkingprofileRMver2.jpg", patient: "Andrea Wilson", condition: "Liver Cancer"},
	]

	constructor(
		private authservice: AuthService,
		private db: AngularFireDatabase){
		// 	this.usersDB = this.db.list("users")
		// 	this.users = this.usersDB.update(.uid, {clicks: this.authservice.clicks}
	
		}

	ngOnInit() {
	}
		//LEADERBOARDS
		// userClicks(user){
		// 	this.clicks = this.clicks + 1;
		// 	if(this.uid === this.uid && this.clicks){
		// 		console.log(this.clicks)
		// 		 //return(
					
		// 		 //)
		// 		 //this.clicks + 1
		// 	}
		// 	this.db.list(user.clicks).push(this.clicks)
		// }

	// getClicks(){
	// 	this.authservice.userClicks()
	// 	return(
	// 		console.log(this.clicks)
	// 		//this.clicks.push(this.clicks)
	// 	)
	// }

}
