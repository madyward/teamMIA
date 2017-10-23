//import {AuthService} from '../auth.service';
import {ClusterSetupMasterSettings} from 'cluster';
import {Router} from '@angular/router';
import {Component, OnInit, Provider} from '@angular/core';
import {NgForm, Form } from '@angular/forms';
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
  company = ["Eli Lily", "Roche", "Northwind"];
  location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
   "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
  ngOnInit(): void {
  }

  userList = [];
  constructor(private signupservice: SignupService, private router: Router){}
  addUser(
    fname: string,
    lname: string,
    email: string
    // ,
    // company: ["Eli Lily", "Roche", "Northwind"],
    // location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
    // "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
  ){
    this.userList.push({
      fname: fname,
      lname: lname,
      email: email
      // ,
      // company: company,
      // location: location
    });
  }

  saveUser(fname: string,
    lname: string,
    email: string
    // company: ["Eli Lily", "Roche", "Northwind"],
    // location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
    // "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
 ){
      this.userList.push({
        fname: fname,
        lname: lname,
        email: email
        // ,
        // company: company,
        // location: location
      });
      this.signupservice.storeUsers(this.userList)
      .then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/video']);
  }
}



  // company = ["Lilly", "Example 2", "Example 3"];
  // location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
  //   "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  // constructor(
  //   private authService: AuthService,
  //   private router: Router
  // ) { }
  // ngOnInit() {
  // }
  // onSignup(form: NgForm){
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   const fname =  form.value.fname;
  //   this.authService.emailSignUp(email, password);
  //   form.resetForm();
  //   this.router.navigate(['/video']);
  // }
  // onSaveUsers(){}