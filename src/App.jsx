import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Questions from './pages/Questions'
import NotFound from './pages/NotFound'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import ProductType from './pages/ProductType'

const OBTENER_PRODUCTOS = gql `
    query obtenerProductos {
        obtenerProductos {
        id
        name
        imagen  
        description
        fijacion
        efecto
        aroma
        tipo
        }
}
`


function App() {

      const {data, loading, error} = useQuery(OBTENER_PRODUCTOS);
  
      if (loading) return "Cargando productos...";
      if (error) return console.log(error)
  
      const productos = data?.obtenerProductos;
  

  return (
    <Layout productos={productos} loading={loading} error={error} >
      <Routes>
        <Route path="/" element={<Home productos={productos} loading={loading} error={error} />}  />
        <Route path="/productos/:tipo" element={<ProductType productos={productos} />} />
        <Route path="/questions" element={<Questions />} />
        <Route path='/all-products' element ={<AllProducts productos={productos} loading={loading} error={error} />}  />
        <Route path="*" element={<NotFound />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </Layout>
  )
}

export default App

