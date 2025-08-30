const InstagramEmbed = () => {
  return (
    <section className="my-20 px-4 md:px-12">
      <div className="max-w-max mx-auto h-full rounded-3xl overflow-hidden shadow-xl border-4 border-yellow-500 bg-white">
        <div className="aspect-video w-full">
        <iframe
          src="https://www.instagram.com/p/DKdVe9UPLUI/embed"
          width="auto"
          height="500"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allowFullScreen
          className="w-full rounded-xl shadow-xl"
        />
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-lg md:text-xl text-gray-700 italic">
          Un vistazo al estilo <span className="font-semibold text-yellow-600">Abuelo Mario</span> en acción.
        </p>
      </div>

      {/* Carga el script de Instagram una sola vez */}
      <script async src="//www.instagram.com/embed.js"></script>
    </section>
  );
};

export default InstagramEmbed;