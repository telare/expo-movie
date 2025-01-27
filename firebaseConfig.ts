import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCORaROjrZnk-UKGNI_8m16oQ7dKgt3EHI",
  authDomain: "e-movie-bb331.firebaseapp.com",
  projectId: "e-movie-bb331",
  storageBucket: "e-movie-bb331.firebasestorage.app",
  messagingSenderId: "592671068353",
  appId: "1:592671068353:web:358effbf69e4c0cc494440",
  measurementId: "G-WMRLRT0FMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const auth = getAuth();
