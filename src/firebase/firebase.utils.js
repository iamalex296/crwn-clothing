import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCV4O5ntRn01JDLCMrVIdqUx05hh4lRARA",
  authDomain: "crwn-db-4de87.firebaseapp.com",
  projectId: "crwn-db-4de87",
  storageBucket: "crwn-db-4de87.appspot.com",
  messagingSenderId: "639023357475",
  appId: "1:639023357475:web:3f747ae35ef4c61666db96",
  measurementId: "G-3H7SWVTL4Y"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;