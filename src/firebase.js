import firebase from 'firebase';
import * as firebaseui from 'firebaseui'

const firebaseConfig = {

  apiKey: "AIzaSyBjhAD5NszlL5rDYnv2g4G1X0_se6SiZxA",

  authDomain: "project-list-app-2306a.firebaseapp.com",

  databaseURL: "https://project-list-app-2306a-default-rtdb.firebaseio.com",

  projectId: "project-list-app-2306a",

  storageBucket: "project-list-app-2306a.appspot.com",

  messagingSenderId: "454930754297",

  appId: "1:454930754297:web:d1090bcc23eb4a47071028",

  measurementId: "G-0ZS0TGMFMC"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const authUI = new firebaseui.auth.AuthUI(auth);
