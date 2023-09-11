import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Product from './pages/Product';
import ProductItem from './pages/ProductItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
