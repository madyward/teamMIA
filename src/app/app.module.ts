import { ServerService } from './admin/server.service';

import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {LeaderBoardsComponent} from './leader-boards/leader-boards.component';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {VideoComponent} from './video/video.component';
import {HomeComponent} from './home/home.component';
import {SigninService} from './auth/signin.service';
import {SignupService} from './auth/signup.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from "./auth/auth.guard";
import {HttpModule} from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material'; 

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDh-hrLobQ_kFD11bWacfhUP_ejzKHFY58",
  authDomain: "remempathy-us.firebaseapp.com",
  databaseURL: "https://remempathy-us.firebaseio.com",
  projectId: "remempathy-us",
  storageBucket: "remempathy-us.appspot.com",
  messagingSenderId: "1071599625628"
};

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'signin', component: SignInComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'video', component: VideoComponent, canActivate: [AuthGuard] },
  {path: 'leaderboards', component: LeaderBoardsComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
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
    //FirebaseListObservable,
    AngularFireAuthModule,
    
  ],

  providers: [
    AuthService,
    AuthGuard,
    SignupService,
    SigninService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }