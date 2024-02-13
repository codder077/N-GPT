// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPDK7AU6eeMO5SgCkNGrw-rtThLgpUhw4",
  authDomain: "n-gpt-fb3d6.firebaseapp.com",
  projectId: "n-gpt-fb3d6",
  storageBucket: "n-gpt-fb3d6.appspot.com",
  messagingSenderId: "935489066720",
  appId: "1:935489066720:web:2943eb1c8c30804122a285",
  measurementId: "G-Y2L3JKWYK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();