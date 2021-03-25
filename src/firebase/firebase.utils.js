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

export const createUserProfileDocument = async (userAuth,AdditionalData) => {
  console.log(AdditionalData)
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...AdditionalData
      },{ merge:true })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const SignInWithGoogle = () => auth.signInWithPopup(provider);