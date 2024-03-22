import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCf4abQBWwkJVrUrVWnv4_q16-0Ks_gNEQ",
  authDomain: "base-de-datos-64948.firebaseapp.com",
  projectId: "base-de-datos-64948",
  storageBucket: "base-de-datos-64948.appspot.com",
  messagingSenderId: "1011533918563",
  appId: "1:1011533918563:web:457af57277a536b82ba356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);