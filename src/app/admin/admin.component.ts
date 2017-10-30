import {ClusterSetupMasterSettings} from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit, Provider} from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import {ServerService} from './server.service';
import {Response} from '@angular/http';
import {Observable} from "rxjs/RX";
import * as firebase from "firebase";
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	ngOnInit(): void {}

	videoList=[];
	videoRef:AngularFireList<any>;
	video: Observable<any[]>;

	constructor(private db: AngularFireDatabase ) {
		this.videoRef = db.list('video');
		this.video = this.videoRef.snapshotChanges().map(
			changes =>{
				return changes.map(c => ({video: c.payload.key, ...c.payload.val() }))
			});
	}
	makeVideo(	url : string,
		picture: string,
    	patient: string, 
    	condition: string){
		this.videoRef.push({url: url,
    		picture: picture, 
    		patient: patient,
    		condition: condition});
	}
	deleteAll(){
		this.videoRef.remove();
	}
 
	
    // saveVideo() {
    // 	this.serverService.storeVideos(this.videoList)
    // 	.then(
    // 		(response) => console.log(response),
    // 		(error) => console.log(error)
    // 	);
    // }

    // getVideo(){
    // 	this.serverService.showVideos()
    // 	.then(
    // 		(videoList: any[]) => console.log(videoList[0].url),         
    // 		(error) => console.log(error)
    // 	);
	// }
	


	addVideo(
		url : string,
		picture: string,
    	patient: string, 
    	condition: string
	){
		this.videoList.push({
    		url: url,
    		picture: picture, 
    		patient: patient,
    		condition: condition
    	});
	}
}