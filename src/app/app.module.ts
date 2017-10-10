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
import { SignUpComponent } from './sign-up/sign-up.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
  {path: 'test', component: TestComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LeaderBoardsComponent,
    ContactComponent,
    ProfileComponent,
    SignUpComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
