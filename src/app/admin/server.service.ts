import {Injectable, Provider} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AdminComponent} from './admin.component';
import {firebaseConfig} from "../app.module";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class ServerService {
    private db: any
    constructor(){this.db = firebase.database();} 
    
    storeVideos(videoList: any[]): Promise<any> {
        return this.db.ref('video').push(videoList); //{video: videoList}
        
                            //Use .set ^^ ONCE, then change to .update for the rest of the time
        }

    showVideos(): Promise<any>{
        return this.db.ref('video').once('value').then(snapshot =>{
            return snapshot.val();
        })
    }  
    
}        