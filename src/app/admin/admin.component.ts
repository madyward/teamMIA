import { ClusterSetupMasterSettings } from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgForm, Form } from '@angular/forms';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    this.getVideo();
    throw new Error("Method not implemente.");
    
  }


  videos=[];


  constructor(private serverService: ServerService) {}
    addVideo(
      url : string,
      picture: string,
      patient: string, 
      condition: string
    ){
      this.videos.push({
        url: url,
        picture: picture, 
        patient: patient,
        condition: condition
      });
    }
    saveVideo() {
      this.serverService.storeVideos(this.videos)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    getVideo(){
      this.serverService.showVideos()
        .subscribe(
          (videos: any[]) => this.videos = videos, 
          
          (error) => console.log(error)

        );

    }

   

  

}