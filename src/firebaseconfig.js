import { initializeApp } from "firebase/app"
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore"
// Ultima modificación Diego Canelo 7/04/2022
const firebaseConfig = {
    apiKey: "AIzaSyBJIBEqZ8XVNdgUAmDxMgL2VN05Hyf7H7w",
    authDomain: "computer-app-d8da9.firebaseapp.com",
    projectId: "computer-app-d8da9",
    storageBucket: "computer-app-d8da9.appspot.com",
    messagingSenderId: "344456992288",
    appId: "1:344456992288:web:81c11cfe9c4cd975760e45",
    measurementId: "G-W300135ERX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore()

  export {app , db}