import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, 
    private router: Router) { }
  ngOnInit() {
  }
  onUserChanges(form: NgForm){
    
  }
}
