import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgP53uqZPTuxfHw_su7FifUU4RgSZPSTg",
  authDomain: "notesc12.firebaseapp.com",
  projectId: "notesc12",
  storageBucket: "notesc12.appspot.com",
  messagingSenderId: "1037682390431",
  appId: "1:1037682390431:web:a312a8d623cde0b16539aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}