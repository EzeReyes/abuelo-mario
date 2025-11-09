// import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Carrusel from './Carrusel';

const Products = () => {

  return (
    <>
    <div id="products" className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-lg md:w-3xl md:text-3xl text-center font-bold p-10 text-gray-800">
        <h2>Todos nuestros productos desde Pomadas, ceras para el pelo, texturizadores, geles de afeitar</h2>
      </div>


      <Carrusel />

      <HashLink scroll to={'/all-products'} className='mt-8 text-gray-800 font-bold text-lg md:text-2xl transition-all hover:text-yellow-500 hover:underline'>Ver todos los productos</HashLink>
    </div>
    </>
  );
};

export default Products;
