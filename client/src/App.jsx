import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Products from './admin/ProductList'
import AddProduct from './admin/AddProduct'
import Dashboard from './admin/Dashboard'
import ProductList from './admin/ProductList'
import EditProduct from './admin/EditProduct'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

//npm run dev

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/productDetails/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart userId={1000} />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/admin' element={<ProductList />} />
        <Route path='/admin/addProducts' element={<AddProduct />} />
        <Route path='/admin/editProducts/:id' element={<EditProduct />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
