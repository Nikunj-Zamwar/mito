// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVf42au_73QU3BsDFVUWL7sr3e23MPKAc",
    authDomain: "mito-7326f.firebaseapp.com",
    projectId: "mito-7326f",
    storageBucket: "mito-7326f.appspot.com",
    messagingSenderId: "753408959812",
    appId: "1:753408959812:web:5f3f56fbd1200d2cd16311",
    measurementId: "G-30SVWE5BYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);