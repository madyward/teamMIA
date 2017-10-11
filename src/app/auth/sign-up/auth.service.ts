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
        )
    }
}