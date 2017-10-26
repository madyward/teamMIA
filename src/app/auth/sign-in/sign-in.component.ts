import {Router} from "@angular/router";
import {AuthService} from '../auth.service';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
	constructor(
    	private authService: AuthService,
    	private router: Router
	  ){}
	  
  	ngOnInit() {
  	}
	onSignin(form: NgForm){
    	const email = form.value.email;
    	const password = form.value.password;
    	this.authService.emailLogin(email, password);
    	form.resetForm();
    	this.router.navigate(['/video']);
  	}
}