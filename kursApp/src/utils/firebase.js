import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGEING_ID,
    appId: import.meta.env.VITE_APP_ID
};


initializeApp(firebaseConfig);

export const AUTH = getAuth();
export const DB = getFirestore();