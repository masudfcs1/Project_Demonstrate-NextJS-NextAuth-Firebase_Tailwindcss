// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "shoplily-fe9b7.firebaseapp.com",
  projectId: "shoplily-fe9b7",
  storageBucket: "shoplily-fe9b7.appspot.com",
  messagingSenderId: "992532210413",
  appId: "1:992532210413:web:da90c844763893d9e622e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
