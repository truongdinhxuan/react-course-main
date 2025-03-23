import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/customer/Contact'
import About from './pages/customer/About'
import CustomerLayout from './shared/layouts/CustomerLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './shared/layouts/AdminLayout'
import CategoryList from './pages/admin/category/CategoryList'
import ProductList from './pages/admin/product/ProductList'
import ProductDetail from './pages/admin/product/elements/ProductDetail'
import ProductAdd from './pages/admin/product/elements/ProductAdd'
import ProductUpdate from './pages/admin/product/elements/ProductUpdate'
import Login from './pages/customer/Login'
import Register from './pages/customer/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}
        <Route path='/' element={<CustomerLayout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Auth */}
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        {/* Admin */}
        <Route path='admin' element={<AdminLayout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path='category' element={<CategoryList />} />
          <Route path='product' element={<ProductList />} />
          <Route path='product/add' element={<ProductAdd />} />
          <Route path='product/update/:id' element={<ProductUpdate />} />
          <Route path='product/:id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
