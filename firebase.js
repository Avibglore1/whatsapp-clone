// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2-3JBAPC3ieIWedoGAqrRmetnpbNWFtY",
  authDomain: "wa-clone-da904.firebaseapp.com",
  projectId: "wa-clone-da904",
  storageBucket: "wa-clone-da904.appspot.com",
  messagingSenderId: "857166653019",
  appId: "1:857166653019:web:c040cb4d01096f046fc17e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();
export {auth, db, storage}