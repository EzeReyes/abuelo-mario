import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const location = useLocation();

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
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold flex items-center">
          <HashLink to="/" title="Abuelo Mario" onClick={() => setIsOpen(false)}>
            <img
              src="https://i.ibb.co/rGr7CKLL/img-abuelo.webp"
              alt="Logo"
              title="Abuelo Mario"
              className="inline-block rounded-full h-8 w-8 mr-2"
            />
            <span
              className={`font-sans italic text-2xl shadow-2xl text-shadow-gold ${
                location.pathname === '/questions' ? 'text-white' : 'text-black'
              }`}
            >
              ABUELO MARIO
            </span>
          </HashLink>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
          title="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {location.pathname === '/questions' && (
            <HashLink
              to="/"
              title="Home"
              className={`font-bold ${
                location.pathname === '/questions' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'
              }`}
            >
              Home
            </HashLink>
          )}

          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <HashLink
              to="/#products"
              title="Productos"
              className={`font-bold ${
                location.pathname === '/questions' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'
              }`}
            >
              Productos
            </HashLink>
            <ul
              className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                productsDropdownOpen ? 'opacity-100 max-h-96 translate-y-0' : 'opacity-0 max-h-0 -translate-y-2'
              }`}
            >
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ver todos los productos</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pomada</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Texturizador</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shaving Gel</li>
            </ul>
          </div>

          <HashLink
            to="/#about"
            title="Acerca de"
            className={`font-bold ${
              location.pathname === '/questions' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'
            }`}
          >
            About
          </HashLink>
          <HashLink
            to="/#contact"
            title="Contacto"
            className={`font-bold ${
              location.pathname === '/questions' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'
            }`}
          >
            Contact
          </HashLink>
          <HashLink
            to="/questions"
            title="Preguntas Frecuentes"
            className={`font-bold ${
              location.pathname === '/questions' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-black'
            }`}
          >
            Preguntas Frecuentes
          </HashLink>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white rounded-xl shadow-xl p-4">
          {location.pathname === '/questions' && (
            <HashLink
              to="/"
              title="Home"
              className={`font-bold ${
                location.pathname === '/questions' && 'text-gray-800 hover:text-black'
              }`}
            >
              Home
            </HashLink>
          )}
          <div className="w-full">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full text-gray-800 font-bold hover:text-black"
            >
              Productos
            </button>
            <ul
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                mobileProductsOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
              }`}
            > 
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ver todos los productos</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pomada</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Texturizador</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shaving Gel</li>
            </ul>
          </div>

          <HashLink to="/#about" title="Acerca de" className="text-gray-800 font-bold hover:text-black" onClick={() => setIsOpen(false)}>
            About
          </HashLink>
          <HashLink to="/#contact" title="Contacto" className="text-gray-800 font-bold hover:text-black" onClick={() => setIsOpen(false)}>
            Contact
          </HashLink>
          <HashLink to="/questions" title="Preguntas Frecuentes" className="text-gray-800 font-bold hover:text-black" onClick={() => setIsOpen(false)}>
            Preguntas Frecuentes
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;