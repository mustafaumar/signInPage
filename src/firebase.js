// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzsgz-kwKG19ZG4eXHs777JWwTCuyqo-U",
  authDomain: "signin-auth-3cf7e.firebaseapp.com",
  projectId: "signin-auth-3cf7e",
  storageBucket: "signin-auth-3cf7e.appspot.com",
  messagingSenderId: "672364795410",
  appId: "1:672364795410:web:4e71de11df669c44c0eacb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
