import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4Adjdrmag3o8oKSzB6UjWxbn_3vHMDVg",
  authDomain: "moviern-89498.firebaseapp.com",
  projectId: "moviern-89498",
  storageBucket: "moviern-89498.firebasestorage.app",
  messagingSenderId: "872864140452",
  appId: "1:872864140452:web:e8d4636621cc27d202ea31",
  measurementId: "G-J0MS27QF3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const auth = getAuth();
