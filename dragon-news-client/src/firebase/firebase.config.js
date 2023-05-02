// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC63KXmqrggWmVTKHc-whgBNl20OL5Pm-I",
  authDomain: "dragon-news-bfb5d.firebaseapp.com",
  projectId: "dragon-news-bfb5d",
  storageBucket: "dragon-news-bfb5d.appspot.com",
  messagingSenderId: "614197750229",
  appId: "1:614197750229:web:599a346c2818915cc4f55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app