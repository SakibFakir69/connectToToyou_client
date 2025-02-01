

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA304DVNlWJAXQhf80M3_AkECAtjuXfXEI",
  authDomain: "connecttoyou-37689.firebaseapp.com",
  projectId: "connecttoyou-37689",
  storageBucket: "connecttoyou-37689.firebasestorage.app",
  messagingSenderId: "330045843296",
  appId: "1:330045843296:web:8391d878cff7d4e63c6005"
};

let api = import.meta.VITE_API_KEY;
console.log(api)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
