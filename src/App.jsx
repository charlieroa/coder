import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import Checkout from './components/Checkout/Checkout';
import ItemList from './components/Itemlist/ItemList';


function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemList/>} />
           <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />    
           <Route path="/checkout" element={<Checkout />} />              
          </Routes>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;