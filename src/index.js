import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6NH_EV4bZ9rH-ZDYpy1DAvtb3-qArm2o",
  authDomain: "proyectofinalzapata.firebaseapp.com",
  projectId: "proyectofinalzapata",
  storageBucket: "proyectofinalzapata.appspot.com",
  messagingSenderId: "611256303401",
  appId: "1:611256303401:web:688fe419f694a331a00138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

