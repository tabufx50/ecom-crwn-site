import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
     apiKey: "AIzaSyBwuWfBrHSNpMNZCZYWufAwsipFvrGKGnA",
  authDomain: "crown-clothing-17293.firebaseapp.com",
  databaseURL: "https://crown-clothing-17293-default-rtdb.firebaseio.com",
  projectId: "crown-clothing-17293",
  storageBucket: "crown-clothing-17293.appspot.com",
  messagingSenderId: "359665643578",
  appId: "1:359665643578:web:a60ae8593a1f0121804503",
  measurementId: "G-MKVZJCSQQE"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
          });
      } catch (error) {
        console.log('error creating user', error.message);

      }
    }

    return userRef;

  };

 
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({  prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

