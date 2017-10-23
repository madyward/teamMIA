import 'rxjs/add/operator/toPromise';
import {Injectable, Provider} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/RX';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {SignUpComponent} from './sign-up/sign-up.component';
import {firebaseConfig} from "../app.module";
import {AngularFireDatabaseModule, AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class SignupService {
    private db: any
    //API_BASE: String = 'https://remempathy-us.firebaseio.com/';
    constructor(){this.db = firebase.database();}
    storeUsers(userList: any[]): Promise<any> {
        return this.db.ref('users').push(userList);
    }
   
}


//This is the method that calls out to the server and post a new user.
// signUp(userCreds){
//         console.log(userCreds);
//         return this.http.post(this.API_BASE + 'signup', userCreds).toPromise().then(data => data);
//     }