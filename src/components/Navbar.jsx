import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Transparente si está antes de 100px o después de 150px
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
      className={`fixed w-full backdrop-blur-sm top-0 z-10 p-4 transition-colors duration-300 ${
        isTransparent ? 'bg-transparent backdrop-blur-sm' : 'bg-zinc-400 bg-opacity-90'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex items-center">
          <img
            src="/images/imagen-fondo.png"
            alt="Logo"
            className="inline-block rounded-full h-8 w-8 mr-2"
          />
          <span className="font-sans italic text-2xl text-black shadow-2xl  text-shadow-gold">ABUELO MARIO</span>
        </div>
        <div className='flex items-center gap-8'>
          <a href="/#products" className={`"mx-2 font-bold" ${!isTransparent ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black' }`}>
            Products
          </a>
          <a href="/#about" className={`"mx-2 font-bold" ${!isTransparent ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black' }`}>
            About
          </a>
          <a href="/#contact" className={`"mx-2 font-bold" ${!isTransparent ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black' }`}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;