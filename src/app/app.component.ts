import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
        <nav class='navbar navbar-default' style="background-color: #FF7575">
            <div class='container-fluid'>
                <a class='navbar-brand'style="color: white">{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/home']" style="color: white">Home</a></li>
                    <li><a [routerLink]="['/video']"style="color: white">Video</a></li>
                    <li><a [routerLink]="['/leaderboards']"style="color: white">Leader Boards</a></li>
                    <li><a [routerLink]="['/contact']"style="color: white">Contact</a></li>
                    <li><a [routerLink]="['/profile']"style="color: white">Profile</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {}
