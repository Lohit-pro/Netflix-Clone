import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKgGxThkLgCbiV4N8uAr0QPIymw5jaTD0",
  authDomain: "netflix-clone-e056c.firebaseapp.com",
  projectId: "netflix-clone-e056c",
  storageBucket: "netflix-clone-e056c.appspot.com",
  messagingSenderId: "1054315485612",
  appId: "1:1054315485612:web:58febd9ce29e5a0c65c209"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export default db;