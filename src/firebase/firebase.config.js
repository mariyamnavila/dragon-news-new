// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKa3yuAVdP9puPV2Ovyd75e7jvPg3jR3E",
    authDomain: "dragon-news-3c9ae.firebaseapp.com",
    projectId: "dragon-news-3c9ae",
    storageBucket: "dragon-news-3c9ae.firebasestorage.app",
    messagingSenderId: "257563749785",
    appId: "1:257563749785:web:2a536216175321f1013708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;