// Initialize Cloud Firestore through Firebase
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = ({
    apiKey: "AIzaSyBfn2x9s6HWQnottH1qBdJMb3yZ4PYqU2k",
    authDomain: "slack-alike-8d77f.firebaseapp.com",
    databaseURL: "https://slack-alike-8d77f-default-rtdb.firebaseio.com",
    projectId: "slack-alike-8d77f",
    storageBucket: "slack-alike-8d77f.appspot.com",
    messagingSenderId: "684397378206",
    appId: "1:684397378206:web:0ea82415403eaa55bf998f",
    measurementId: "G-M2E352B8MD"
  });
// this command connects the front-end with the back-end on initialisation

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db}; 