// Before 8.0.0
// import * as firebase from 'firebase/app'
// After 8.0.0
// import firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCon2KgAVEuGcemTNJOhh2uRMsu4lCxWZI",
    authDomain: "jyk-firegram.firebaseapp.com",
    databaseURL: "https://jyk-firegram.firebaseio.com",
    projectId: "jyk-firegram",
    storageBucket: "jyk-firegram.appspot.com",
    messagingSenderId: "1075349596769",
    appId: "1:1075349596769:web:eb60695ee6a8c556929820"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };