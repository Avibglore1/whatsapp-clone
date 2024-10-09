// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQS7Efk7S3WDdXjFblAscDtlsv8FdgAXI",
  authDomain: "whatsapp-clone-f5432.firebaseapp.com",
  projectId: "whatsapp-clone-f5432",
  storageBucket: "whatsapp-clone-f5432.appspot.com",
  messagingSenderId: "306534405489",
  appId: "1:306534405489:web:9bfc495d532bca079792d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}