import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.API_F_apiKey,
  authDomain: process.env.API_F_authDomain,
  projectId: process.env.API_F_projectId,
  storageBucket: process.env.API_F_storageBucket,
  messagingSenderId: process.env.API_F_messagingSenderId,
  appId: process.env.API_F_appId,
  measurementId: process.env.API_F_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const auth = getAuth();
