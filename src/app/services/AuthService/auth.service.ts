import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
  GoogleAuthProvider,
  User,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { privateRoutes, publicRoutes } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentActiveUser$ = authState(this.afAuth);

  constructor(
    public afAuth: Auth,
    private afGoogleAuth: AngularFireAuth,
    private router: Router
  ) {}

  googleAuth() {
    return this.authLoginGoogle(new GoogleAuthProvider());
  }

  authLoginGoogle(provider: GoogleAuthProvider) {
    return this.afGoogleAuth
      .signInWithPopup(provider)
      .then((res) => {
        console.log('success');
        this.router.navigate([
          `/${privateRoutes.PRIVATE}/${privateRoutes.UPLOADIMAGESDASHBOARD}`,
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async register(email: string | any, password: string | any) {
    const user = await createUserWithEmailAndPassword(
      this.afAuth,
      email,
      password
    );
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logIn(email: string | any, password: string | any) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    return signOut(this.afAuth);
  }

  deleteAccount(user$: User) {
    user$
      .delete()
      .then((res) => {
        alert('user was sucessfully deleted');
        this.router.navigate([`${publicRoutes.HOME}`]);
      })
      .catch((error) => {
        console.error(error);
        alert(
          'Something went wrong, please logout then go back and try again.'
        );
      });
  }
}
