const InstagramEmbed = () => {
  return (
    <section className="my-20 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Texto narrativo */}
        <div className="text-center md:text-left text-lg md:text-2xl text-gray-700 italic font-light tracking-wide max-w-xl">
          <p>
            Desde el corazón de la <span className="text-yellow-600 font-semibold">Ciudad Feliz</span>, donde el mar se mezcla con memorias y estilo, nace una marca que honra la tradición con cada corte, cada aroma y cada gesto. <br />
            <span className="font-semibold text-yellow-600">Abuelo Mario</span> no es solo grooming: es un ritual, una historia que se transmite con orgullo y autenticidad.
          </p>
        </div>

        {/* Video embebido optimizado */}
        <div className="max-w-xl w-full rounded-3xl overflow-hidden shadow-xl border-4 border-yellow-500 bg-white">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/YlcUM7lMHeY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-xl transition-opacity duration-700 opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Pie narrativo */}
      <div className="text-center mt-6">
        <p className="text-lg md:text-xl text-gray-700 italic">
          Un vistazo al <span className="font-semibold text-yellow-600">ritual, el estilo y la esencia</span> de Abuelo Mario en acción.
        </p>
      </div>

      {/* Script de Instagram (si lo necesitás para embeds futuros) */}
      <script async src="//www.instagram.com/embed.js"></script>
    </section>
  );
};

export default InstagramEmbed;