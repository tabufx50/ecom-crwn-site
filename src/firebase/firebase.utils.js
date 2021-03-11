import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyDADre2C4Hq50Q9LuK5iNy_bUYHjsxa2mY",
    authDomain: "crwn-db-d574f.firebaseapp.com",
    projectId: "crwn-db-d574f",
    storageBucket: "crwn-db-d574f.appspot.com",
    messagingSenderId: "307571078271",
    appId: "1:307571078271:web:d7ea412d20121cbbf9bb4a",
    measurementId: "G-24820S8FC1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({  prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

