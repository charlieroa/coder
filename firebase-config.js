// Importa las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_y0bLplszdESptTxU7C4snlNZTrevlFY",
  authDomain: "codercommerce-cbc3d.firebaseapp.com",
  projectId: "codercommerce-cbc3d",
  storageBucket: "codercommerce-cbc3d.appspot.com",
  messagingSenderId: "59226489005",
  appId: "1:59226489005:web:043c89851733a6aa71c624",
  measurementId: "G-E3VKYXHXX5"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

// Exporta db para que pueda ser utilizado en tus servicios
export { db };