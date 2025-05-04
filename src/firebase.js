import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importando o Firestore
import { getStorage } from "firebase/storage"; // Importando o Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyC3lwLCYqfI8zT5FfFYjqittluPwlPdJX0",
  authDomain: "blogcadeopontoevirgula.firebaseapp.com",
  projectId: "blogcadeopontoevirgula",
  storageBucket: "blogcadeopontoevirgula.firebasestorage.app",
  messagingSenderId: "672794517253",
  appId: "1:672794517253:web:df6ab433b19e627cfb616c",
  measurementId: "G-9S4VKR0SBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firestore
const db = getFirestore(app);

// Inicializando o Firebase Storage
const storage = getStorage(app);

export { db, storage };
