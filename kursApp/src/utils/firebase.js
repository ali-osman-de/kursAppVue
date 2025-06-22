import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGEING_ID,
    appId: import.meta.env.APP_ID
};

initializeApp(firebaseConfig);

export const AUTH = getAuth();
export const DB = getFirestore();