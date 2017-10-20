import { ClusterSetupMasterSettings } from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit, Provider} from '@angular/core';
import {NgForm, Form } from '@angular/forms';
import { ServerService } from './server.service';
import { Response } from '@angular/http';
import {Observable} from "rxjs/RX";
import * as firebase from "firebase";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
  }

  videoList=[];
  constructor(private serverService: ServerService) {}
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
    saveVideo() {
      this.serverService.storeVideos(this.videoList)
      .then(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    getVideo(){
      this.serverService.showVideos()
      .then(
        (videoList: any[]) => console.log(videoList[0].url),         
        (error) => console.log(error)
      );
    }
}

//SAVEVIDEO ORIGINAL
//saveVideo() {
//  this.serverService.storeVideos(this.videos)
//   .subcribe(
//     (response) => console.log(response),
//     (error) => console.log(error)
//   );
//}



//getVideo(){
//  this.serverService.showVideos()
//      .subscribe(
//     (videos: any[]) => console.log(videos), 
      
       
//        (error) => console.log(error)

//      );
 //}