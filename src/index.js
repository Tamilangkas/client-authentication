// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD4NJMwURNNCDqOHSdPH8d4txGwbnUyqSc",
  authDomain: "fir-app-fd1be.firebaseapp.com",
  projectId: "fir-app-fd1be",
  storageBucket: "fir-app-fd1be.appspot.com",
  messagingSenderId: "836857438453",
  appId: "1:836857438453:web:ea990037f0f0ac2e9fa5bc",
  measurementId: "G-758QRPPRX8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);