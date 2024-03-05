import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import ItemLisContainer from './components/ItemListContainer/ItemLisContainer';


function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemLisContainer/>} />
           <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />           
          </Routes>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;