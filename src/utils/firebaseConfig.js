// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwXUGEXjwFMteM74pFQvHAXcvhpwyaINY",
    authDomain: "clothes-store-45efe.firebaseapp.com",
    projectId: "clothes-store-45efe",
    storageBucket: "clothes-store-45efe.appspot.com",
    messagingSenderId: "978916313444",
    appId: "1:978916313444:web:e30874078c97421b991271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);