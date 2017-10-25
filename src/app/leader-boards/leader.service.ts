import { any } from 'codelyzer/util/function';
import {Injectable, Provider} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import {LeaderBoardsComponent} from './leader-boards.component';
import {firebaseConfig} from "../app.module";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LeaderService {
    private db: any
    constructor(){this.db = firebase.database();}

    showUsers(): Promise<any>{
        return this.db.ref('users').once('value').then(snapshot =>{
            return snapshot.val();
        })
    } 
}
