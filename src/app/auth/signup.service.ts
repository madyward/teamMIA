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
	users: Observable<any[]>;
   	usersDB: AngularFireList<any>;

   	constructor(private db: AngularFireDatabase){
        this.usersDB = this.db.list("users")
        this.users = this.usersDB.valueChanges()
    }
    getUsers(){
        return this.users
    }
}