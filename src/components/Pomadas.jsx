const Pomadas = () => {
  const productos = [
    {
      nombre: "Al agua",
      descripcion:
        "Pomada de fijación media y brillo natural. Ideal para estilos clásicos y peinados prolijos.",
      imagen: "/img/pomada-agua.jpg", // Reemplazá con tu ruta real
      aromas: ["Frutilla", "Melón", "Manzana"],
    },
    {
      nombre: "Mate",
      descripcion:
        "Pomada de fijación fuerte y acabado seco. Perfecta para looks texturizados y modernos.",
      imagen: "/img/pomada-mate.jpg", // Reemplazá con tu ruta real
      aromas: ["Frutilla", "Melón", "Manzana"],
    },
  ];


  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Pomadas</h2>

      <div className="flex flex-col gap-12">
        {productos.map((pomada, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8"
          >
            {/* Imagen */}
            <div className="w-full md:w-1/2">
              <img
                src={pomada.imagen}
                alt={`Pomada ${pomada.nombre}`}
                className="w-full h-auto rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Datos */}
            <div className="w-full md:w-1/2 text-gray-700">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-2">{pomada.nombre}</h3>
              <p className="mb-4 text-base md:text-lg">{pomada.descripcion}</p>

              <div>
                <p className="font-medium mb-2">Aromas disponibles:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pomada.aromas.map((aroma, i) => (
                    <span
                      key={i}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm border border-yellow-300"
                    >
                      {aroma}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón WhatsApp */}
<a
  href={`https://wa.me/+5492235950860?text=${encodeURIComponent(
    `Hola Abuelo Mario, quiero solicitar la Pomada ${pomada.nombre}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
>
  Solicitar
</a>            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pomadas;