import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="product" element={ <Product /> } />
      </Routes>
    </div>
  )
}

export default App
