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
  location = ["Lilly", "Example 2", "Example 3"];
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