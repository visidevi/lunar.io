// src/firebase.js
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBkQ2mKU0wB0rPAPDSnK3ULqCAEfu6H4Sw",
  authDomain: "vegan-place.firebaseapp.com",
  databaseURL: "https://vegan-place.firebaseio.com",
  projectId: "vegan-place",
  storageBucket: "vegan-place.appspot.com",
  messagingSenderId: "456107137524"
}
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;