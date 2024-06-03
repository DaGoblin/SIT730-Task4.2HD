// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFyk435oWUFk6XbNJtJ3-Yp8LdqV3jzJE",
  authDomain: "task4-2hd.firebaseapp.com",
  projectId: "task4-2hd",
  storageBucket: "task4-2hd.appspot.com",
  messagingSenderId: "1037782900722",
  appId: "1:1037782900722:web:3a2363cc05578d1916556b",
  measurementId: "G-PM5D05WB0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
