import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100 || scrollY > 150) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-screen top-0 z-10 p-4 transition-colors duration-300 ${
        isTransparent ? 'bg-transparent backdrop-blur-sm' : 'bg-zinc-400 bg-opacity-90'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold flex items-center">
          <img
            src="https://i.ibb.co/rGr7CKLL/img-abuelo.webp"
            alt="Logo"
            title='Abuelo Mario'
            className="inline-block rounded-full h-8 w-8 mr-2"
          />
          <span className="font-sans italic text-2xl text-black shadow-2xl text-shadow-gold">
            ABUELO MARIO
          </span>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Aria Name"
          title='Menú'  
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div className={`hidden md:flex items-center gap-8`}>
          <a
            href="/#products"
            title='Productos'
            className={`mx-2 font-bold ${
              !isTransparent ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'
            }`}
          >
            Products
          </a>
          <a
            href="/#about"
            title='Acerca de'
            className={`mx-2 font-bold ${
              !isTransparent ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'
            }`}
          >
            About
          </a>
          <a
            href="/#contact"
            title='Contacto'
            className={`mx-2 font-bold ${
              !isTransparent ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'
            }`}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white rounded-xl shadow-xl p-4">
          <a href="/#products" title="productos" className="text-gray-800 font-bold hover:text-black">
            Products
          </a>
          <a href="/#about" title="acerca de" className="text-gray-800 font-bold hover:text-black">
            About
          </a>
          <a href="/#contact" title="contacto" className="text-gray-800 font-bold hover:text-black">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;