import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD8400uj9Tm-brtLeBDe8abuIuOZmMXfg0',
  authDomain: 'store-react-222.firebaseapp.com',
  databaseURL: 'https://store-react-222.firebaseio.com',
  projectId: 'store-react-222',
  storageBucket: 'store-react-222.appspot.com',
  messagingSenderId: '896967451003',
  appId: '1:896967451003:web:575ea68b0fc3c733311dde',
  measurementId: 'G-ZQTXJRC343'
};

firebase.initializeApp(config);

// create and simplify user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
    console.log(snapshot);
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
