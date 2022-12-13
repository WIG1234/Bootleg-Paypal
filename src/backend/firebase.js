// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import{getDatabase}from'firebase/database';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB94eOaYN7b1BbD9B3mWmQ_6CgrNcX8Bxs",
  authDomain: "database-26f22.firebaseapp.com",
  projectId: "database-26f22",
  storageBucket: "database-26f22.appspot.com",
  messagingSenderId: "27243066726",
  appId: "1:27243066726:web:8de3c6683abab8c09684a7"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db=getDatabase(app);