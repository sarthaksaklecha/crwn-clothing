import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyATwOLSrEGYBPlP1Nbf7VJESYWLxktzVDQ",
    authDomain: "crwn-db-84ad8.firebaseapp.com",
    projectId: "crwn-db-84ad8",
    storageBucket: "crwn-db-84ad8.appspot.com",
    messagingSenderId: "56980489341",
    appId: "1:56980489341:web:e21b52f00fd02e78631d14",
    measurementId: "G-TH9CJV7CQM"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const SignInWithGoogle = () => auth.signInWithPopup(provider);