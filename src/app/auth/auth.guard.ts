import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        public afAuth: AngularFireAuth
    ){}
    canActivate(): Observable<boolean> {
        return this.afAuth.authState.map(auth => {
            if(!auth) {
				alert("Access restricted to registered users only. Please sign up or sign in.");
                this.router.navigate(['signup']);
                return false
            } else {
                return true
            }
        })
    }
}