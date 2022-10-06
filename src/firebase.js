// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRv0Sw7jHSTZZT8igajq8W22NYAOC1z3k",
  authDomain: "login-project-5a314.firebaseapp.com",
  projectId: "login-project-5a314",
  storageBucket: "login-project-5a314.appspot.com",
  messagingSenderId: "141216736300",
  appId: "1:141216736300:web:1cc95a112fc0bdaf7a9d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);