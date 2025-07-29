// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbZag5rNawRCaM56Ymc1BFGlWYkKmensE",
  authDomain: "plants-shop-14209.firebaseapp.com",
  projectId: "plants-shop-14209",
  storageBucket: "plants-shop-14209.firebasestorage.app",
  messagingSenderId: "128442613899",
  appId: "1:128442613899:web:fb6a458990df87eca8548e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)