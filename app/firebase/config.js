// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  storageBucket:NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId:NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
//works for server side rendering in next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const uath=getAuth(app)

export {app,uath}

