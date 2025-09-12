const Texturizador = () => {
  const producto = {
    nombre: "Texturizador",
    descripcion:
      "Polvo ligero que aporta volumen y definición sin rigidez. Ideal para estilos desenfadados y naturales.",
    imagen: "/img/texturizador.jpg",
    aromas: ["Cítrico", "Menta", "Lavanda"],
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{producto.nombre}</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8">
        <div className="w-full md:w-1/2">
          <img
            src={producto.imagen}
            alt={`Producto ${producto.nombre}`}
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-700">
          <p className="mb-4 text-base md:text-lg">{producto.descripcion}</p>

          <p className="font-medium mb-2">Aromas disponibles:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {producto.aromas.map((aroma, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm border border-yellow-300"
              >
                {aroma}
              </span>
            ))}
          </div>

          <a
            href={`https://wa.me/+5492235950860?text=${encodeURIComponent(
              `Hola Abuelo Mario, quiero solicitar el ${producto.nombre}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
          >
            Solicitar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Texturizador;