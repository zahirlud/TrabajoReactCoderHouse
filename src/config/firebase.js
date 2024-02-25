import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfHBsnEcfcK2K2wix9RnyisQNJpmguCWw",
  authDomain: "coderhouse-proyecto-98543.firebaseapp.com",
  projectId: "coderhouse-proyecto-98543",
  storageBucket: "coderhouse-proyecto-98543.appspot.com",
  messagingSenderId: "682206110556",
  appId: "1:682206110556:web:f79da8c651408a90e51799"
};


const appFirebase = initializeApp(firebaseConfig);


export const auth = getAuth(appFirebase)