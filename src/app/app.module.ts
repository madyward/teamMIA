import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LeaderBoardsComponent } from './leader-boards/leader-boards.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { SigninService} from './auth/signin.service';
import { SignupService } from './auth/signup.service';
import { AuthService } from './auth/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'signin', component: SignInComponent},
  {path: 'video', component: VideoComponent },
  {path: 'leaderboards', component: LeaderBoardsComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'profile', component: ProfileComponent },
  
  
  
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    AuthService,
    SignupService,
    SigninService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
