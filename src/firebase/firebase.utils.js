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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log('snapShot', snapShot)
  // console.log(firestore.doc(`users/${userAuth.uid}`));

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;