import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyCg4sAZ6V8XUsCHCtJc1gsfbNSszkXyv5s",
  authDomain: "parkeasy-6c53b.firebaseapp.com",
  projectId: "parkeasy-6c53b",
  storageBucket: "parkeasy-6c53b.appspot.com",
  messagingSenderId: "1011049068217",
  appId: "1:1011049068217:web:d6c6ad1e64d74375868d68",
  measurementId: "G-7G2K36ZM8K",
};
  
firebase.initializeApp(config);

export default firebase;