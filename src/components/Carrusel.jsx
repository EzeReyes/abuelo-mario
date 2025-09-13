import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carrusel = () => {
  const slides = [
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525082/abuelo-mario-images/carrusel/uva-first_isbziv.png", nombre: "Uva First", id: "68c2078ff993d0ce80db2ab4"  },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525081/abuelo-mario-images/carrusel/strong-neon-water_fpcyte.png", nombre: "Strong Neon Water", id: "68c4dc7f650a206408ddbc81" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525079/abuelo-mario-images/carrusel/papaya-young_br3dig.png", nombre: "Papaya Young", id: "68c207d7f993d0ce80db2ab6" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525079/abuelo-mario-images/carrusel/native_cqlclh.png", nombre: "Native", id: "68c4d8d2650a206408ddbc73" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525078/abuelo-mario-images/carrusel/marine_atuk17.png", nombre: "Marine", id: "68c4d940650a206408ddbc79" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525077/abuelo-mario-images/carrusel/manzana-ink_ytidzz.png", nombre: "Manzana Ink", id: "68c2070bf993d0ce80db2ab0" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525076/abuelo-mario-images/carrusel/gum-grease_ofziot.png", nombre: "Gum Grease", id: "68c208baf993d0ce80db2aba" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525076/abuelo-mario-images/carrusel/crystal_d4gs5u.png", nombre: "Crystal", id: "68c4d920650a206408ddbc77" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525075/abuelo-mario-images/carrusel/desert_pkegbq.png", nombre: "Desert", id: "68c4d904650a206408ddbc75" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525076/abuelo-mario-images/carrusel/chocolate-cookies_ws0zcu.png", nombre: "Chocolate Cookies", id: "68c206f4f993d0ce80db2aae" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525075/abuelo-mario-images/carrusel/chicle-glow_bpiksb.png", nombre: "Chicle Glow", id: "68c2064ef993d0ce80db2aaa" },
    { src: "https://res.cloudinary.com/dbctwitmb/image/upload/v1757525075/abuelo-mario-images/carrusel/black-pearl_f0wzi2.png", nombre: "Black Pearl", id: "68c2088bf993d0ce80db2ab8" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 bg-white px-4 w-screen">
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl overflow-hidden rounded-xl backdrop-blur-md bg-white/60 border border-neutral-300 shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Link to={`/${slide.id}`}                  
              key={slide.id}
              className="min-w-full flex flex-col items-center justify-center px-4 py-6 text-center"
            >
              <img
                src={slide.src}
                alt={slide.nombre}
                className={`w-full max-w-xs object-contain transition-opacity duration-700 transform ${
                  currentSlide === index
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                } hover:scale-105`}
              />
              <p className="mt-3 text-sm font-medium text-gray-700">{slide.nombre}</p>
            </Link>
          ))}
        </div>

        {/* Botones */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-black scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;