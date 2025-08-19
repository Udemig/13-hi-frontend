// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqqOYqwagY7HTgmLAgjave8I3tRmuSxE",
  authDomain: "hi-twitter-9cab2.firebaseapp.com",
  projectId: "hi-twitter-9cab2",
  storageBucket: "hi-twitter-9cab2.firebasestorage.app",
  messagingSenderId: "637628699667",
  appId: "1:637628699667:web:617b218f5d71e7c9611be6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth sağlaycısnın referansını al
export const auth = getAuth(app);

// google sağlayıcının kurulumu
export const provider = new GoogleAuthProvider();

// veritabanı referansını al
export const db = getFirestore(app);

// medya depolama alanının referansını al
export const storage = getStorage(app);
