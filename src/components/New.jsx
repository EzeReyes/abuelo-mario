const New = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 bg-linear-to-br from-green-600 via-lime-700 to-yellow-300">
      <h2 className="text-yellow-300 text-center text-xl md:text-4xl font-semibold uppercase mb-8">
        Descubrí lo nuevo
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* Texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-md">
          <h3 className="text-xl md:text-4xl font-bold bg-linear-to-r from-yellow-300 via-green-500 to-green-500 bg-clip-text text-transparent animate-fade-green">
            PEGAJOSITO ABUELO MARIO
          </h3>
          <p className="text-base md:text-xl font-medium text-yellow-100">
            Pomada al agua, de fijación fuerte, que deja un efecto opaco. Mejora tus peinados con un nuevo estilo y una fragancia rica.
          </p>
        </div>

        {/* Imagen */}
        <img
          className="rounded-lg w-48 md:w-80 shadow-xl hover:scale-105 transition-transform duration-300"
          src="https://res.cloudinary.com/dbctwitmb/image/upload/v1757455743/abuelo-mario-images/pomada-agua-fuerte-opaco_vkixrr.webp"
          alt="Pomada Pegajosito Abuelo Mario"
        />
      </div>
    </div>
  );
};

export default New;