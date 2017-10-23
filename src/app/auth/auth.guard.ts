import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import {SignupService} from "./signup.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private signupservice: SignupService, private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
          if (this.auth.authenticated || this.signupservice.storeUsers) { return true; }
          console.log('access denied!')
          if (!this.auth.authenticated || !this.signupservice.storeUsers) {
              this.router.navigate(['/signup']);
              alert("Access restricted to registered users only. Please sign up or sign in.") 
                return false
            }
      }
}