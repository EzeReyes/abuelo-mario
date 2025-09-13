import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Questions from './pages/Questions'
import NotFound from './pages/NotFound'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path='/all-products' element ={<AllProducts />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </Layout>
  )
}

export default App

