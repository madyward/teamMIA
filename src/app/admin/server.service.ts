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
        return this.http.post('https://gotowork-26f00.firebaseio.com/video.json', videos);
    }

    showVideos(){
        return this.http.get('https://gotowork-26f00.firebaseio.com/video.json')
          .map(
             (response: Response) => {
                 const video = response.json();                
                 return video;
             } 
          );
    }
}