import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBmwABTcHbNoddcn2en_bIeYimg51Sl51k",
    authDomain: "kursapp-60746.firebaseapp.com",
    projectId: "kursapp-60746",
    storageBucket: "kursapp-60746.firebasestorage.app",
    messagingSenderId: "663738863600",
    appId: "1:663738863600:web:a5054777ca6614a55a5735"
};

initializeApp(firebaseConfig);

const AUTH = getAuth();
const DB = getFirestore();

export default { AUTH, DB };