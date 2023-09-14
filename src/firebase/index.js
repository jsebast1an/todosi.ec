// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1phP8rbB5Ux6Zhzq6Wj1S17Yq8RPIz7o",
    authDomain: "todo-si.firebaseapp.com",
    projectId: "todo-si",
    storageBucket: "todo-si.appspot.com",
    messagingSenderId: "741602680006",
    appId: "1:741602680006:web:2b8769093d4096b859cbc7",
    measurementId: "G-DG0DKPMPLH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const dbFirestore = getFirestore(app)

export {dbFirestore}
