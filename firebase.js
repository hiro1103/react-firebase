import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCucERP4BZR4tFSySxpuOzWdc3UYHFZM4k",
    authDomain: "react-auth-f2041.firebaseapp.com",
    projectId: "react-auth-f2041",
    storageBucket: "react-auth-f2041.appspot.com",
    messagingSenderId: "478619596118",
    appId: "1:478619596118:web:d91c6384f927668243d2f7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();