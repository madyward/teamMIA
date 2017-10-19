import { stringify } from 'querystring';
import { Http, Response } from '@angular/http';
import { Injectable, Provider } from '@angular/core';
import 'rxjs/RX';
import * as firebase from 'firebase';
import { AdminComponent } from './admin.component';


@Injectable()
export class ServerService {
    constructor(private http: Http){}
    storeVideos(videos: any[]){
        return this.http.put('https://gotowork-26f00.firebaseio.com/video.json', videos);
    }

    showVideos(){
        return this.http.get('https://gotowork-26f00.firebaseio.com/video.json')
          .map(
             (response: Response) => {
                 const data = response.json();                
                 for(const videos of data){
                     videos.key.url = 'hee_' + videos.url;
             } 
             return data;
            }
            );
    }
}