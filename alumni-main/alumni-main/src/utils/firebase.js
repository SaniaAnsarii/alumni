// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC74Hxz1uSG46N1XA1BWudFYtw9JcI71NI",
  authDomain: "alumini-new.firebaseapp.com",
  projectId: "alumini-new",
  storageBucket: "alumini-new.firebasestorage.app",
  messagingSenderId: "478264755493",
  appId: "1:478264755493:web:be898cf1995834586a06cc",
  measurementId: "G-H2NJRRQ9HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);