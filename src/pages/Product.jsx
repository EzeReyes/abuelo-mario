import BtnWsp from "../components/BtnWsp";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router";

const OBTENER_PRODUCTO = gql `
    query obtenerProducto($id: ID!) {
        obtenerProducto(id: $id) {
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

const Product = () => {

    const route = useParams();
    const {id} = route;

  const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
    variables: { id },
    skip: !id, // Evita ejecutar la consulta si no hay id
  });

  const producto = data?.obtenerProducto || [];

  if (loading) return <p className="text-center py-10">Cargando el producto...</p>;
  if (error) return <p className="text-center py-10 text-red-600">Error al cargar el producto: {error.message}</p>;    return (
        <div className="m-4 p-10 flex flex-col gap-4 items-center justify-center">
            <section className="py-16 px-4 md:px-12 bg-white">
                <div className="flex flex-col gap-12">
                    <div
                        key={producto.id}
                        className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8"
                    >
                        {/* Imagen */}
                        <div className="w-full md:w-1/2">
                        <img
                            src={producto.imagen}
                            alt={`producto ${producto.name}`}
                            className="w-full h-auto rounded-xl object-cover shadow-md"
                        />
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
                </div>
            </section>
            <BtnWsp />
        </div>
    )
}

export default Product;