import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2iUEerBocZ8YQn8zzy66BN7UT6i5Npe8",
  authDomain: "mitra-eye-hospital.firebaseapp.com",
  projectId: "mitra-eye-hospital",
  storageBucket: "mitra-eye-hospital.firebasestorage.app",
  messagingSenderId: "168841266956",
  appId: "1:168841266956:web:ff1ffbb081151e4956ab29"
};

const app = initializeApp(firebaseConfig);

// 🔥 THIS LINE FIXES YOUR ERROR
export const db = getFirestore(app);