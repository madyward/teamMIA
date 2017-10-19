import { ClusterSetupMasterSettings } from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgForm, Form } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemente.");
  }

  videos=[{
    url : "",
    picture: '',
    patient: '',
    condition: '', 
  }
  ];

  constructor() {}
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

   

  

}
