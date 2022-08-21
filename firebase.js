// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz5uXOOzziheXo_gPuztwi2zPYcdLKH_4",
  authDomain: "hotate-dairy.firebaseapp.com",
  projectId: "hotate-dairy",
  storageBucket: "hotate-dairy.appspot.com",
  messagingSenderId: "901711202081",
  appId: "1:901711202081:web:654dc50959ec076de5a060",
  measurementId: "G-CYVWW0122W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// プラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}