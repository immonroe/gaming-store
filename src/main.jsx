import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainNavigation from './components/layout/MainNavigation.jsx'
import Products from './products/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainNavigation />
        <App />
        <Products />
    </BrowserRouter>,
)
