import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainNavigation from './components/layout/MainNavigation.jsx'
// import Cards from '../src/components/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainNavigation />
        <App />
        {/* <Cards /> */}
    </BrowserRouter>,
)
