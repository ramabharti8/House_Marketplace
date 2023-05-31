// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCgKK4Wh2kGDmGdWi8iMQlWojlbjgRhUA",
  authDomain: "house-market-997d9.firebaseapp.com",
  projectId: "house-market-997d9",
  storageBucket: "house-market-997d9.appspot.com",
  messagingSenderId: "968256845366",
  appId: "1:968256845366:web:dd33da1b0277fb41808a97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();