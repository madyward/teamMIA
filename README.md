# TeamMIA

This project was created by Madyson (`https://github.com/madysonward/`), AJ (`https://github.com/ahephner/`), and Isaac (`https://github.com/iludlow99`) for our @Work team project.

The project was built using Angular 4 and AngularFirebase2

In this current build this app is set to be used by a medical company. However, the site would be able to be converted to other company uses. The general purpose for the site is to allow a user to view video content distributed by a company and track the users views. The users views are then compaired to other users on a leaderboard. This app would ensure that users are viewing information that a company requires such as training docs, sales videos, etc... 


## Getting Started

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


##Adding/Changing Videos

Out of the box the app comes with the videos coded in and can be found in src/app/video/video.component.ts

Replace the information within the video array for you purpose. Due to limited amount of approved videos from current client we simply have added them there. 

As of 10/31/2017 there is a way to store add and save your videos if you go to https://remempathy-us.firebaseapp.com/admin you can add videos and store them a database of your choice. CAUTION AT THIS TIME CLICKING THE DELETE ONE AND DELETE ALL WILL DELETE ALL VIDEOS YOU ENTER

To change Firebase DB to your use: 
Go to src/app/app.module.ts Change the data inside of firebaseConfig = {} to your own firebase DB. 


##Statement of Work Docs

<a href='https://docs.google.com/document/d/1ihvfwQO19kJNxhgTu7hfehEfNQTpwQDr3Kym0NK0JpM/edit#heading=h.gjdgxs'>Statement of work</a>


##Deploy


## Running the Tests

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
## View Deploved Version

Pleas visit https://remempathy-us.firebaseapp.com/home

## Deployment

Good read <a href='https://alligator.io/angular/deploying-angular-app-to-firebase/'>on deploying</a>

<ul>
<li>Make sure you have installed Firebase Tools globally</li> 
<li>Go to Master Branch and type: ng build</li>
<li>Next type: firebase init</li>
<li>Enter your firebase info</li>
<li>Select create a Firebase project</li>
<li>If promoted on Hosting options: Where asked about public enter dist instead. </li>
<li>edit firebase.json: 
{
  "projects": {
    "default": "remempathy-us"
  },
  "database": {
    "rules": "database.rules.json"
  },
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "storage": {
    "rules": "storage.rules"
  },
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
</li>
<li>on command line type: firebase deploy</li>

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Built With

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
