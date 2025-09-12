const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-bl from-white to-gray-500">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Imagen tipo radio */}
        <div className="w-full md:w-auto rounded-xl overflow-hidden shadow-lg border-4 border-gray-300">
          <img
            src="https://i.ibb.co/1GfJs0Fh/abuelo-citroen.webp"
            alt="Abuelo Mario Citroën"
            title="Abuelo Mario"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-lg md:text-4xl font-bold mb-4 text-gray-800">
            Productos para barbería Abuelo Mario
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            Desde Abuelo Mario ofrecemos productos para barberías. Al probar nuestras pomadas y ceras para tus peinados, no solo estás eligiendo productos de alta calidad, sino que también estás apoyando a una marca que valora la autenticidad y la tradición. Cada uno de nuestros productos está cuidadosamente formulado para ofrecerte el mejor rendimiento, ayudándote a mantener tu estilo con confianza y facilidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;