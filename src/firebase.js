// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9eGdQG3i81i5bmIvbO8OmCENPmCqk6u4",
  authDomain: "mock-project-22834.firebaseapp.com",
  projectId: "mock-project-22834",
  storageBucket: "mock-project-22834.appspot.com",
  messagingSenderId: "195832090143",
  appId: "1:195832090143:web:11052ee3bf6b96f18c8f2a",
  measurementId: "G-KQLHW8YGYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app)