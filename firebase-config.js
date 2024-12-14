import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, updateDoc, increment } from "firebase/firestore";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCs2rZ6ZUrh57U118h8sGPDe41y2pIO9c0",
  authDomain: "goatzy-codes.firebaseapp.com",
  projectId: "goatzy-codes",
  storageBucket: "goatzy-codes.firebasestorage.app",
  messagingSenderId: "657960936886",
  appId: "1:657960936886:web:f9246fff0082d3d6660d17",
  measurementId: "G-P705B12256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db, analytics };
