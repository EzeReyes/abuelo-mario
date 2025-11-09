const TipsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-lg md:text-4xl font-bold text-center text-gray-800 mb-30">
        Consejos para aplicar nuestros productos
      </h2>

      <div className="grid gap-30 md:grid-cols-3 md:gap-10 max-w-6xl mx-auto">
        {/* Pomadas */}
        <div className="relative bg-linear-to-br from-yellow-50 via-neutral-100 to-neutral-300 shadow-xl rounded-3xl border-l-8 border-yellow-500">
          <img
            src="/images/coco_ywiwu5_g4jmw2.webp"
            className="absolute top-0 left-12 transform -translate-x-1/2 -translate-y-1/2 h-40 w-auto"
            alt="pomadas abuelo mario"
            title="pomadas abuelo mario"
          />
          <h3 className="text-lg md:text-xl text-center font-semibold text-gray-800 p-4">Pomadas</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed p-4">
            <li>Aplicá sobre cabello seco o ligeramente húmedo para mejor fijación.</li>
            <li>Usá una pequeña cantidad y calentala entre las manos antes de distribuir.</li>
            <li>Peiná con los dedos para un look natural o con peine para definición clásica.</li>
          </ul>
        </div>

        {/* Shaving Gel */}
        <div className="relative bg-linear-to-br from-yellow-50 via-neutral-100 to-neutral-300 shadow-xl rounded-3xl border-l-8 border-yellow-500">
          <img
            src="/images/leon_wvxuis_gkt4gc.webp"
            className="absolute top-0 left-16 transform -translate-x-1/2 -translate-y-1/2 h-30 w-auto"
            alt="pomadas abuelo mario"
            title="pomadas abuelo mario"
          />
          <h3 className="text-lg md:text-xl text-center font-semibold text-gray-800 p-4">Shaving Gel</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed p-4">
            <li>Aplicá sobre piel limpia y húmeda para activar sus propiedades.</li>
            <li>Masajeá suavemente hasta formar una capa uniforme.</li>
            <li>Dejá actuar unos segundos antes de afeitar para suavizar el vello.</li>
          </ul>
        </div>

        {/* Texturizador */}
<div className="relative bg-linear-to-br from-yellow-50 via-neutral-100 to-neutral-300 shadow-xl rounded-3xl border-l-8 border-yellow-500">
          <img
            src="/images/mono_lvfwia_euveaw.webp"
            className="absolute top-0 left-12 transform -translate-x-1/2 -translate-y-1/2 h-40 w-auto"
            alt="pomadas abuelo mario"
            title="pomadas abuelo mario"
          />
          <h3 className="text-lg md:text-xl text-center font-semibold text-gray-800 p-4">Texturizador</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed p-4">
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