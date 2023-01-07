import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentActiveUser$ = authState(this.afAuth);

  constructor(private afAuth: Auth) {}

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
}
