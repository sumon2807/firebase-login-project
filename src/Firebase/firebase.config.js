// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABasv2bvxfY38JgRoiJF268_utJ05Cx0",
  authDomain: "auth-firebase-context-login.firebaseapp.com",
  projectId: "auth-firebase-context-login",
  storageBucket: "auth-firebase-context-login.appspot.com",
  messagingSenderId: "26596146367",
  appId: "1:26596146367:web:22c15d35fb4e5441029a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;