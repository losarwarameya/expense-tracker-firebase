// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM_v4aV86cItBgRbIMNLjOy48cg0Za8b8",
  authDomain: "expense-tracker-1edf0.firebaseapp.com",
  projectId: "expense-tracker-1edf0",
  storageBucket: "expense-tracker-1edf0.appspot.com",
  messagingSenderId: "29982433221",
  appId: "1:29982433221:web:6c144748225876c026b5ac",
  measurementId: "G-6YCYWCMDEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login 
// firebase init
// firebase deploy