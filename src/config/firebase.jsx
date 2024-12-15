
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjqhtMb5dINUxXoWwG-8tyihT9kiJI-3g",
  authDomain: "vite-contact-e2240.firebaseapp.com",
  projectId: "vite-contact-e2240",
  storageBucket: "vite-contact-e2240.firebasestorage.app",
  messagingSenderId: "800630195957",
  appId: "1:800630195957:web:88ff97d778234f957da7bc",
  measurementId: "G-PDE430C274"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
