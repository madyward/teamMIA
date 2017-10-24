import {AuthService} from '../auth.service';
import {ClusterSetupMasterSettings} from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit, Provider} from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import { SignupService } from '../signup.service';
import { Response } from '@angular/http';
import {Observable} from "rxjs/RX";
import * as firebase from "firebase";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  ngOnInit(): void {
  }

  company = ["Eli Lily", "Roche", "Northwind"]
  location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

  constructor(private authservice: AuthService, private router: Router){}
  
  addUser(data, password) {
    console.log(data.company);
    this.authservice.emailSignUp(data, password)
  }
}