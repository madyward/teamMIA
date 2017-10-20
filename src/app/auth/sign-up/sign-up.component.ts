import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  company = ["Lilly", "Example 2", "Example 3"];
  location = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const fname =  form.value.fname;
    this.authService.emailSignUp(email, password);
    form.resetForm();
    this.router.navigate(['/video']);
  }
  onSaveUsers(){}
}