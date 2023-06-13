import logo from './logo.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav'
import CatNav from './components/CatNav'
import MainComponent from './components/MainComponent'
import LandingPage from './components'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

function App() {
  return (
    <div className='App'>
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App