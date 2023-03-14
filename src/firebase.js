// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-f700c.firebaseapp.com",
  projectId: "tutorial-f700c",
  storageBucket: "tutorial-f700c.appspot.com",
  messagingSenderId: "930245805223",
  appId: "1:930245805223:web:7b1a7ea4df996bd7e64782"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);