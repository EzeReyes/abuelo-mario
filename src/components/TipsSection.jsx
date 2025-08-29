const TipsSection = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-neutral-100 to-neutral-300 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Consejos para aplicar nuestros productos
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Pomadas */}
        <div className="bg-white shadow-xl rounded-3xl p-6 border-l-8 border-yellow-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Pomadas</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>Aplicá sobre cabello seco o ligeramente húmedo para mejor fijación.</li>
            <li>Usá una pequeña cantidad y calentala entre las manos antes de distribuir.</li>
            <li>Peiná con los dedos para un look natural o con peine para definición clásica.</li>
          </ul>
        </div>

        {/* Shaving Gel */}
        <div className="bg-white shadow-xl rounded-3xl p-6 border-l-8 border-yellow-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shaving Gel</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>Aplicá sobre piel limpia y húmeda para activar sus propiedades.</li>
            <li>Masajeá suavemente hasta formar una capa uniforme.</li>
            <li>Dejá actuar unos segundos antes de afeitar para suavizar el vello.</li>
          </ul>
        </div>

        {/* Texturizador */}
        <div className="bg-white shadow-xl rounded-3xl p-6 border-l-8 border-yellow-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Texturizador</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>Ideal para dar volumen y definición sin rigidez.</li>
            <li>Aplicá en raíces y medios, con cabello seco para máximo efecto.</li>
            <li>Usá los dedos o secador para moldear y activar la textura.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;