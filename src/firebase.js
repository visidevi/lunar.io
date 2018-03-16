// src/firebase.js
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCaN5RFsEmki4tyyaRoc2Pfwfe-5zqhfFw",
  authDomain: "lunar-io.firebaseapp.com",
  databaseURL: "https://lunar-io.firebaseio.com",
  projectId: "lunar-io",
  storageBucket: "lunar-io.appspot.com",
  messagingSenderId: "520700094193"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;