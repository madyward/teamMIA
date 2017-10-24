import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    // constructor(private auth: AuthService, private signupservice: SignupService, private router: Router) {}
    // canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean> | boolean {
    //       if (this.auth.authenticated || this.signupservice.storeUsers) { return true; }
    //       console.log('access denied!')
    //       if (!this.auth.authenticated || !this.signupservice.storeUsers) {
    //           this.router.navigate(['/signup']);
    //           alert("Access restricted to registered users only. Please sign up or sign in.") 
    //             return false
    //         }
    //   }
    constructor(
        private router: Router,
        public afAuth: AngularFireAuth
    ){}
    canActivate(): Observable<boolean> {
        return this.afAuth.authState.map(auth => {
            if(!auth) {
                this.router.navigate(['signup'])
                return false
            } else {
                return true
            }
        })
    }
}