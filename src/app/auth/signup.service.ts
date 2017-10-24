import 'rxjs/add/operator/toPromise';
import {Injectable, Provider} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/RX';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {SignUpComponent} from './sign-up/sign-up.component';
import {firebaseConfig} from "../app.module";
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable()
export class SignupService {
   // private db: any
    //API_BASE: String = 'https://remempathy-us.firebaseio.com/';
   users: Observable<any[]>;
   usersDB: AngularFireList<any>;

   constructor(private db: AngularFireDatabase){
        this.usersDB = this.db.list("users")
        this.users = this.usersDB.valueChanges()
    }
    getUsers(){
        return this.users
    }
//    addUser(fname, lname, email){
//        this.usersDB.set(
//         name: fname + lname,
//         email: email
//     )
//    }
}