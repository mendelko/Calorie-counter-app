import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCCD7UGijBkPJVVHMtw4RxxlWmYZNtDB7M",
    authDomain: "calorie-counter-f126b.firebaseapp.com",
    projectId: "calorie-counter-f126b",
    storageBucket: "calorie-counter-f126b.appspot.com",
    messagingSenderId: "899879746979",
    appId: "1:899879746979:web:98765bf0f7afc599c42e16",
    measurementId: "G-SFF8YM30Y8"
  });

  export const auth = firebase.auth();

  const firestore = firebase.firestore();