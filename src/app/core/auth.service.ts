import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {NotifyService} from './notify.service';

import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  user: Observable<User | null>;
  userData: User;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {

    // redirect the user to the dashboard if it's logged in
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.router.navigate(['admin/dashboard']);
      }
    });

    this.user = this.afAuth.authState
      .switchMap((user) => {
        if (user) {
          this.userData = user;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        return this.notify.update('Welcome to Firestarter!!!', 'success');
      })
      .catch((error) => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        return this.notify.update('Welcome to Firestarter!!!', 'success');
      })
      .catch((error) => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/admin/login']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
}
