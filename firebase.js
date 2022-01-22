
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  

const firebaseConfig = {
  apiKey: "AIzaSyCV48MNaslmcYh-oLYiCuFcgJLQ2rRhjGQ",
  authDomain: "todolist-78fa4.firebaseapp.com",
  projectId: "todolist-78fa4",
  storageBucket: "todolist-78fa4.appspot.com",
  messagingSenderId: "321607265074",
  appId: "1:321607265074:web:6f02c8cf3151b7ac47452b",
  measurementId: "G-7FB3W5PVLY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
    
