// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKmhI3i2MdrFkThWbFegmR6q11ynKOivE",
  authDomain: "e-commerce-5bdd9.firebaseapp.com",
  projectId: "e-commerce-5bdd9",
  storageBucket: "e-commerce-5bdd9.firebasestorage.app",
  messagingSenderId: "457824734328",
  appId: "1:457824734328:web:852c60d4bea0c645dff18d",
  measurementId: "G-KX2NSPYCDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app