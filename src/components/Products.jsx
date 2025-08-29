import { useState } from 'react';

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
        name: 'pomada',
        features: [
            'Fijación media a fuerte (según base: agua o aceite)',
            'Acabado brillante o natural',
            'Duración prolongada, resistente a la humedad',
            'Textura cremosa, fácil de aplicar',
        ],
    },
    { 
        name: 'texturizador',
        features: [
            'Fijación ligera a media',
            'Acabado mate',
            'Aporta volumen y definición',
            'Ideal para estilos despeinados y naturales',
        ],
    },
    {
        name: 'shaving gel',
        features: [
            'Fórmula hidratante con aloe vera y vitamina E',
            'Proporciona un afeitado suave y cómodo',
            'Reduce la irritación y protege la piel',
            'Aroma fresco y agradable',
        ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div id="products" className="text-4xl font-bold mb-10 text-gray-800">
        Alguno de nuestros productos
      </div>

      <div className="flex flex-row gap-10">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col gap-4 items-center justify-center">
            <div
                id={product.name === 'shaving gel' ? 'shavinggel' : product.name}
                className={`h-52 w-52 rounded-full flex border-2 border-yellow-500 flex-col items-center justify-center bg-yellow-600 cursor-pointer hover:brightness-75 ${hoveredIndex === index && "transition-all duration-300"}`}
                onClick={() => hoveredIndex === null ? setHoveredIndex(index) : setHoveredIndex(null)}
            >
              <p className="text-white font-semibold">{product.name}</p>
            </div>

            {hoveredIndex === index && (
              <div className="p-8 h-auto w-auto rounded-2xl bg-zinc-400 flex flex-col items-center justify-center text-justify transition-opacity duration-300">
                <p className="font-semibold mb-2 text-xs">Características:</p>
                <ul className="list-disc list-inside text-black space-y-2 text-xs">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
