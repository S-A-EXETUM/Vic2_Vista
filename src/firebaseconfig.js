// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeFi26h1KrPO1isaoz4bjzaN8QlqmbEZI",
  authDomain: "react-vic2.firebaseapp.com",
  projectId: "react-vic2",
  storageBucket: "react-vic2.appspot.com",
  messagingSenderId: "312365660970",
  appId: "1:312365660970:web:b94e4d3351611cdcd27c53"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {app , db};
