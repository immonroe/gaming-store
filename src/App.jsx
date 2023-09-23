// import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Product from './pages/Product';
import ProductItem from './pages/ProductItem';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductItem />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
