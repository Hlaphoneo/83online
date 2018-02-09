import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { EventsModule } from 'angular4-events';
import {MatSnackBar} from '@angular/material';

import {Router} from '@angular/router';


// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public router : Router , public snackBar : MatSnackBar , public events : EventsModule , private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  emailSignup(email: string, password: string) {
     this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
        console.log('Success!', value);
      }).catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
   emailAuthenticate (email: string, password: string) : any {
     return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
       this.router.navigate(['/home'])
       return "successes"
      }).catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
            this.openSnackBar("Invalid email","OK")
            break;
          case "auth/user-not-found":
            this.openSnackBar("User not registered","OK")
            break;
          case "auth/wrong-password":
            this.openSnackBar("Wrong password!","OK")
            break;

          default:
            this.openSnackBar(err.message,"OK")

        }
      });
  }
  singOut() {
    this.firebaseAuth  .auth  .signOut();
  }

  openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 3000,
  });
}
}
