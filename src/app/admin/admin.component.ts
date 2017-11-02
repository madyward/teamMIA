import {ClusterSetupMasterSettings} from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit, Provider} from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import {ServerService} from './server.service';
import {Response} from '@angular/http';
import {Observable} from "rxjs/RX";
import * as firebase from "firebase";
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AuthService} from "../auth/auth.service";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	videoRef:AngularFireList<any>;
	 video: Observable<any[]>;
	constructor(db: AngularFireDatabase) {
	  this.videoRef = db.list('videos');
	  // Use snapshotChanges().map() to store the key
	  this.video = this.videoRef.snapshotChanges().map(changes => {
		return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
	  });
	}
	addItem(videoUrl: string,
	pictureUrl:string,
	patient: string,
	condition: string) {
	  this.videoRef.push({text: videoUrl,
		    		pictureUrl: pictureUrl, 
		    		patient: patient,
		    		condition: condition });
	}
	updateItem(key: string, videoUrl: string,
		pictureUrl: string, 
		patient: string,
		condition: string) {
	  this.videoRef.update(key, { videoUrl: videoUrl,
		picture: pictureUrl, 
		patient: patient,
		condition: condition });
	}
	deleteItem(key: string) {    
	  this.videoRef.remove(key); 
	}
	deleteEverything() {
	  this.videoRef.remove();
	}
	ngOnInit(){}  
}

	// videoList=  [];
	//

	// constructor(private db: AngularFireDatabase, 
	// 	private authservice: AuthService,) {
	// 	this.videoRef = db.list('video');
	// 	//snapshot gives value and key1
	// 	this.video = this.videoRef.snapshotChanges().map(
	// 		changes =>{
	// 			return changes.map(c => ({video: c.payload.key, ...c.payload.val() }))
	// 		});
	// }
	// makeVideo(	url : string,){
	// 	this.videoRef.push({text: url});
	// }

	// deleteAll(){
	// 	this.videoRef.remove();
	// }
	// deleteMe(key: string){
	// 	this.videoRef.remove(key);
	 
	// }
	// deleteItem(key: string) {    
	// 	this.videoRef.remove(key); 
	//   }
	
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
	
	// ngOnInit() {
	// 	this.authservice.showVideo()
	// 	.subscribe(
	// 		video => {
	// 			this.videoList = video }),
	// 			(error) => console.log(error)
	// }

	
	
// 	addVideo(
// 		url : string,
// 		picture: string,
//     	patient: string, 
//     	condition: string
// 	){
// 		this.videoList.push({
//     		url: url,
//     		picture: picture, 
//     		patient: patient,
//     		condition: condition
// 		});
	
// 	}
 