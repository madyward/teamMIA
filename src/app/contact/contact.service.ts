import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ContactService {
  constructor(public http: Http){}

	public sendMail(name, desc, category){
        console.log("send");
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
      	return this.http.post("http://formspree.io/ajhephner178@gmail.com",
            {
            	name: name,
                _replyto: 'no-reply@help.me.queue.com',
                message: "A new support request has been created!",
                description: desc,
                category: category
            },
            {
                'headers' : headers
            }
		)
		.subscribe(res => console.log(res.json()));
    }
}