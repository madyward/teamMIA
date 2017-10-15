import * as firebase from 'firebase';

export class AuthService {

    signupUser(email: string, password: string){
      firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch(
        error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "auth/email-already-in-use"){
                alert("Email already registered.");
            }
            if (errorCode == "auth/invalid-email"){
                alert("Please enter a valid email.");
            }
            if (errorCode == "auth/weak-password"){
                alert("You must enter a stronger password.");
            } else {
                alert(errorMessage);
            } 
            console.log(error);
        }         
    )}
    
    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => console.log(response)
        )
        .catch(
            error => console.log(error)
        );
    }    
    
    getToken(){
        var user = firebase.auth().currentUser;
        if (user){
            console.log("User signed in.");
        } else {
            console.log("No user logged in.");
        }
        return user.getToken();
    }
    signoutUser(){
        firebase.auth().signOut().then(function(){
            console.log("Sign out successful.");
        }).catch(function(error){
            console.log("There was an issue with sign out.");
        });
    }
}