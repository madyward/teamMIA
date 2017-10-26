import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AbstractControl } from '@angular/forms';
// import { PasswordValidation } from './password-validation';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	company = ["Lilly", "Example 2", "Example 3"];
	location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
	"Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
  // static MatchPassword(AC: AbstractControl) {
  //   let password = AC.get('password').value; //To get value in input tag
  //   let confirmPassword = AC.get('confirmPassword').value; //To get value in input tag
  //   if(password != confirmPassword) {
  //     console.log('false');
  //     AC.get('confirmPassword').setErrors( {MatchPassword: true} )
  //   } else {
  //     console.log('true');
  //     return null
  //   }
  // }  

  // form: FormGroup;
    // constructor(private authService: AuthService, 
    // private router: Router) {
    //   this.form = fb.group({
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required]
    //   }, {
    //     validator: PasswordValidation.MatchPassword //Your validation method
    //   })
    //  }
	ngOnInit(){}
}
