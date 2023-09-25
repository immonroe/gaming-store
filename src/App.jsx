// import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

// pages
import MainNavigation from './components/layout/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductItem from './pages/ProductItem';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <MainNavigation />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductItem />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Container>
    </>
  )
}

export default App;
