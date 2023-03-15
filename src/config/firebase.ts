// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2kL_MT03L41aOg4ieBh98tsMLv6lT3b4",
  authDomain: "react-course-99e83.firebaseapp.com",
  projectId: "react-course-99e83",
  storageBucket: "react-course-99e83.appspot.com",
  messagingSenderId: "1044569976946",
  appId: "1:1044569976946:web:3cd3065f9d0905137712eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)