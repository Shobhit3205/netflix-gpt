// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfuabyKxgBQgtR2527syG0hahgA6BLHkg",
  authDomain: "netflixgpt-93544.firebaseapp.com",
  projectId: "netflixgpt-93544",
  storageBucket: "netflixgpt-93544.appspot.com",
  messagingSenderId: "1021431841059",
  appId: "1:1021431841059:web:d68f41d6c94df4b72c4c96",
  measurementId: "G-6N7J8PV8X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);