import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBOcAU6XsO50tgg6lCZ8UXxCLqVysduzXE",
  authDomain: "matoashopping.web.app",
  projectId: "matoashopping",
  storageBucket: "matoashopping.appspot.com",
  messagingSenderId: "679416888479",
  appId: "1:679416888479:web:676b3c98282d1c426fb6aa",
};
const app = initializeApp(firebaseConfig);

export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
