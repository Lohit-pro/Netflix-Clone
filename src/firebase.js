import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8ZA7AaC5pAefROWfw8tGAEkbyxgX0Nik",
    authDomain: "react-netflix-clone-c041f.firebaseapp.com",
    projectId: "react-netflix-clone-c041f",
    storageBucket: "react-netflix-clone-c041f.appspot.com",
    messagingSenderId: "1024904874177",
    appId: "1:1024904874177:web:640e54da6acf4fa4e9ec40"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export default db;