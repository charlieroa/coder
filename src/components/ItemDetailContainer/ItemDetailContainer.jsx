import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerCamisetaPorId } from '../../services/services';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [camiseta, setCamiseta] = useState(null);

  useEffect(() => {
    const fetchCamiseta = async () => {
      const data = await obtenerCamisetaPorId(itemId);
      setCamiseta(data);
    };

    fetchCamiseta();
  }, [itemId]);

  if (!camiseta) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{camiseta.nombre}</h2>
      <img src={camiseta.imagen} alt={camiseta.nombre} />
      <p>{camiseta.descripcion}</p>
      <p>${camiseta.precio}</p>
      {/* Más detalles como desees */}
    </div>
  );
};

export default ItemDetailContainer;
