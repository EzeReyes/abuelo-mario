import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BtnWsp from '../components/BtnWsp';
import Encabezado from '../components/Encabezado';

const ProductType = ({ productos }) => {
  const { tipo } = useParams(); // por ejemplo: "cera", "pomada"
  const productosFiltrados = productos.filter(p => p.tipo.toLowerCase() === tipo.toLowerCase());
  return (
    <div className="m-4 p-10 flex flex-col gap-4 items-center justify-center">
      <Encabezado titulo={tipo} />
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="flex flex-col gap-12">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8"
            >
              {/* Imagen */}
              <div className="w-full md:w-1/2">
                <Link to={`/${producto.id}`}>
                  <img
                    src={producto.imagen}
                    alt={`producto ${producto.name}`}
                    className="w-full h-auto rounded-xl object-cover shadow-md"
                  />
                </Link>
              </div>

              {/* Datos */}
              <div className="w-full md:w-1/2 text-gray-700 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-yellow-600 mb-2 uppercase">{producto.name}</h3>
                  <span className="inline-block bg-gray-400 text-xs text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300">{producto.tipo}</span>
                </div>
                <span title="aroma" className={producto.aroma ? "text-yellow-800 text-center text-sm" : "hidden"}>{producto.aroma}</span>
                <p className="mb-4 text-base md:text-lg">{producto.description}</p>
                <div className="flex flex-col items-center text-start w-max gap-1 text-sm">
                  <span><strong>Efecto: </strong>{producto.efecto}</span>
                  <span><strong>Fijación: </strong>{producto.fijacion}</span>
                </div>

                {/* Botón WhatsApp */}
                <a
                  href={`https://wa.me/+5492235950860?text=${encodeURIComponent(
                    `Hola Abuelo Mario, quiero solicitar el producto ${producto.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-max bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
                >
                  Solicitar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BtnWsp />
    </div>
  );
};

export default ProductType;