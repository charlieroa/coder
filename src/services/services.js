import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase-config'; // Asegúrate de que la ruta sea correcta respecto a tu estructura de proyecto

// Función para obtener todas las camisetas
export const obtenerCamisetas = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ropa"));
    const camisetas = [];
    querySnapshot.forEach((doc) => {
      camisetas.push({ id: doc.id, ...doc.data() });
    });
    return camisetas;
  } catch (error) {
    console.error("Error al obtener camisetas: ", error);
    return [];
  }
};

// Función para obtener los detalles de una camiseta específica por ID
export const obtenerCamisetaPorId = async (id) => {
  try {
    const docRef = doc(db, "ropa", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      // Si el documento existe, retorna un objeto con el ID del documento y sus datos
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      // Si el documento no existe, lanza un error o retorna null
      console.log("No se encontró el documento!");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener la camiseta por ID: ", error);
    return null;
  }
};
