import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {SignupService} from "../auth/signup.service";
import {SigninService} from "../auth/signin.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private signupService: SignupService, private signinService: SigninService) {}

    storeUsers(){
        return this.http.put("https://remempathy-us.firebaseio.com/signup.json", this.signupService);
    .getUsers()
    }
}