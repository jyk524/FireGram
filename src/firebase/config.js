// Before 8.0.0
// import * as firebase from 'firebase/app'
// After 8.0.0
// import firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
require('dotenv').config()

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "jyk-firegram.firebaseapp.com",
    databaseURL: "https://jyk-firegram.firebaseio.com",
    projectId: "jyk-firegram",
    storageBucket: "jyk-firegram.appspot.com",
    messagingSenderId: "1075349596769",
    appId: process.env.appId,
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };