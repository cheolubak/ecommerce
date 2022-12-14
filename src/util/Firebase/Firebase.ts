import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

class Firebase {
  static app: FirebaseApp;

  static init() {
    if (!this.app) {
      this.app = initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SEND_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
      });
    }
  }

  static get auth() {
    if (!this.app) {
      this.init();
    }
    return getAuth(this.app);
  }

  static get db() {
    if (!this.app) {
      this.init();
    }
    return initializeFirestore(this.app, {
      cacheSizeBytes: CACHE_SIZE_UNLIMITED,
    });
  }

  static get storage() {
    if (!this.app) {
      this.init();
    }
    return getStorage(this.app);
  }

  static get analytics() {
    if (!this.app) {
      this.init();
    }
    return getAnalytics(this.app);
  }
}

export default Firebase;
