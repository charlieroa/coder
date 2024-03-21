import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

 

const Checkout = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();
  
    // Calcular totalQuantity y totalPrice aquí
    let totalQuantity = 0;
    let totalPrice = 0;
    Object.values(cartItems).forEach(item => {
      totalQuantity += item.cantidad;
      totalPrice += item.precio * item.cantidad;
    });
  
    const handlePayment = () => {
      console.log('Procesando pago...');
      navigate('/');
    };
  return (
    <div>
         <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Checkout</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Producto
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Cantidad
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Total
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {Object.entries(cartItems).map(([productId, productDetails]) => (
        <tr key={productId}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={productDetails.imagen} alt={productDetails.nombre} />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{productDetails.nombre}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={productDetails.cantidad}
              onChange={(e) => handleQuantityChange(productId, parseInt(e.target.value))}
            />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${productDetails.cantidad * productDetails.precio}
          </td>
        </tr>
      ))}
      <tr>
        <td colSpan="2" className="text-right px-6 py-4 whitespace-nowrap text-sm font-medium">
          Totales
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {totalQuantity} items - ${totalPrice}
        </td>
      </tr>
    </tbody>
  </table>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span>Total: {totalQuantity} items</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button
        onClick={handlePayment}
        className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full"
      >
        Pagar
      </button>
    </div>
     

    </div>
 
  )
}


export default Checkout