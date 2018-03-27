// src/firebase.js
import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYZozTqLiZXgzchixF_fCpUarTY3Y8-Ek",
    authDomain: "lunario-lab.firebaseapp.com",
    databaseURL: "https://lunario-lab.firebaseio.com",
    projectId: "lunario-lab",
    storageBucket: "lunario-lab.appspot.com",
    messagingSenderId: "290833092064"
  };

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
