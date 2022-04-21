import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-oa39ilqrLWEYB__RWuGqn91q-U3K4YI",
    authDomain: "speedfire-900fd.firebaseapp.com",
    projectId: "speedfire-900fd",
    storageBucket: "speedfire-900fd.appspot.com",
    messagingSenderId: "113361111412",
    appId: "1:113361111412:web:70471434b22da8f8a8c421"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)