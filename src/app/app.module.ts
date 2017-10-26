//IMPORT ANGULAR MODULES
import {FormsModule} from '@angular/forms';
import {HttpClientJsonpModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {MatTableModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

//IMPORT COMPONENTS
import {AppComponent} from './app.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {VideoComponent} from './video/video.component';
import {LeaderBoardsComponent} from './leader-boards/leader-boards.component';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminComponent} from './admin/admin.component';

//IMPORT SERVICES
import {AuthGuard} from "./auth/auth.guard";
import {AuthService} from './auth/auth.service';
import {SigninService} from './auth/signin.service';
import {SignupService} from './auth/signup.service';
import {ServerService} from './admin/server.service';
//import {VideoService} from "./video/video.service";
import {ContactService} from "./contact/contact.service";

//IMPORT FIREBASE & ANGULAREFIRE2.5 MODULES
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

//INITIALIZE FIREBASE
export const firebaseConfig = {
	apiKey: "AIzaSyDh-hrLobQ_kFD11bWacfhUP_ejzKHFY58",
	authDomain: "remempathy-us.firebaseapp.com",
	databaseURL: "https://remempathy-us.firebaseio.com",
	projectId: "remempathy-us",
	storageBucket: "remempathy-us.appspot.com",
	messagingSenderId: "1071599625628"
};

//SET UP ROUTING
const appRoutes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'signup', component: SignUpComponent},
	{path: 'signin', component: SignInComponent},
	{path: 'admin', component: AdminComponent},
	{path: 'video', component: VideoComponent, canActivate: [AuthGuard]},
	{path: 'leaderboards', component: LeaderBoardsComponent, canActivate: [AuthGuard]},
	{path: 'contact', component: ContactComponent},
	{path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

//ADD COMPONENTS, MODULES, AND SERVICES
@NgModule({
  	declarations: [
    	AppComponent,
    	LeaderBoardsComponent,
    	ContactComponent,
    	ProfileComponent,
    	SignUpComponent,
    	SignInComponent,
    	VideoComponent,
    	HomeComponent,
    	AdminComponent
	],
	imports: [
    	BrowserModule,
    	HttpClientJsonpModule,
    	FormsModule,
    	HttpModule,
    	RouterModule.forRoot(appRoutes),
    	AngularFireModule.initializeApp(firebaseConfig),
	    AngularFireModule,
 	   AngularFireDatabaseModule,
    	AngularFireAuthModule
	],
	providers: [
		AuthService,
		AuthGuard,
		SignupService,
		SigninService,
		ServerService,
		//VideoService,
		ContactService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}