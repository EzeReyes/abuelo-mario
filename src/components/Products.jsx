// import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Carrusel from './Carrusel';

const Products = () => {
  //  const [hoveredIndex, setHoveredIndex] = useState(null);

  //  const products = [
  //    {
  //        name: 'pomada',
  //        features: [
  //            'Fijación media a fuerte (según base: agua o aceite)',
  //            'Acabado brillante o natural',
  //            'Duración prolongada, resistente a la humedad',
  //            'Textura cremosa, fácil de aplicar',
  //        ],
  //        alt: 'pomada, cera para el pelo, texturizador, gel de afeitar',
  //    },
  //    { 
  //        name: 'texturizador',
  //        features: [
  //            'Fijación ligera a media',
  //            'Acabado mate',
  //            'Aporta volumen y definición',
  //            'Ideal para estilos despeinados y naturales',
  //        ],
  //                alt: 'pomada, cera para el pelo, texturizador, gel de afeitar',
  //    },
  //    {
  //        name: 'shaving gel',
  //        features: [
  //            'Fórmula hidratante con aloe vera y vitamina E',
  //            'Proporciona un afeitado suave y cómodo',
  //            'Reduce la irritación y protege la piel',
  //            'Aroma fresco y agradable',
  //        ],
  //              alt: 'pomada, cera para el pelo, texturizador, gel de afeitar',
  //    },
  //  ];

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
