import { Observable } from 'rxjs';
import Firebase from './Firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from 'firebase/auth';

class Authentication extends Firebase {
  static authChanged() {
    return new Observable((subscriber) => {
      onAuthStateChanged(this.auth, (user) => {
        subscriber.next(user);
      });
    });
  }

  static loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    this.auth.languageCode = 'ko';
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      login_hint: 'user@example.com',
    });
    return setPersistence(this.auth, browserLocalPersistence).then(() =>
      signInWithPopup(this.auth, provider)
    );
  }

  static loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return setPersistence(this.auth, browserLocalPersistence)
      .then(() => signInWithEmailAndPassword(this.auth, email, password))
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          return this.createWithEmailAndPassword(email, password);
        } else {
          throw err;
        }
      });
  }

  static createWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return setPersistence(this.auth, browserLocalPersistence).then(() =>
      createUserWithEmailAndPassword(this.auth, email, password)
    );
  }
}

export default Authentication;
