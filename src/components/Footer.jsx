import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Footer = () => {





    return (
    <footer className="bg-neutral-800 text-white py-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-lg font-bold flex items-center flex-col gap-1">
            <div>
                <img
                src="https://i.ibb.co/6cCDXxM2/img-abuelo.webp"
                alt="Logo"
                title="Logo Abuelo Mario"
                className="inline-block rounded-full h-8 w-8 mr-2"
                />
                <span className="font-sans italic text-2xl text-black shadow-2xl  text-shadow-gold">ABUELO MARIO</span>
            </div>
            <div className="text-sm flex flex-col items-center">
                <span className="text-gray-400">Contacto: +54 9 223 595-0860</span>
                <span className="text-gray-400">7600, Mar del Plata, Buenos Aires, Argentina</span>  
            </div>  
        </div>
        <div className="flex gap-6">
          {/* WhatsApp */}
            <HashLink
            to="https://wa.me/5492235950860"
            title="WhatsApp"
            target="_blank"
            rel="me noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300 flex items-center gap-2"
            >
            <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
            >
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.937.797 5.682 2.188 8.063L0 32l8.188-2.188A15.89 15.89 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-2.563 0-5.031-.688-7.188-2l-.5-.313-4.875 1.313 1.313-4.813-.313-.5C3.188 21.031 2.5 18.563 2.5 16 2.5 8.938 8.938 2.5 16 2.5S29.5 8.938 29.5 16 23.063 29.5 16 29.5zm7.25-9.938c-.375-.188-2.188-1.063-2.531-1.188-.344-.125-.594-.188-.844.188s-.969 1.188-1.188 1.438c-.219.25-.438.281-.813.094-.375-.188-1.594-.594-3.031-1.906-1.125-1-1.875-2.219-2.094-2.594-.219-.375-.023-.563.156-.75.156-.156.344-.406.5-.625.156-.219.219-.375.344-.625.125-.25.063-.469-.031-.656-.094-.188-.844-2.031-1.156-2.781-.313-.75-.625-.656-.844-.656-.219 0-.469-.031-.719-.031s-.656.094-1 .469c-.344.375-1.313 1.281-1.313 3.125s1.344 3.625 1.531 3.875c.188.25 2.625 4 6.375 5.625.891.375 1.594.594 2.125.75.891.281 1.7.25 2.344.156.719-.094 2.188-.875 2.5-1.719.313-.844.313-1.563.219-1.719-.094-.156-.344-.25-.719-.438z" />
            </svg>
            WhatsApp
            </HashLink>

          {/* Instagram */}
            <HashLink
            to="https://www.instagram.com/abuelo_mario777"
            target="_blank"
            title="Instagram"
            rel="me noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300 flex items-center gap-2"
            >
            <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.13 4.602.396 3.635 1.363 2.668 2.33 2.402 3.501 2.344 4.78.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.279.324 2.45 1.291 3.417.967.967 2.138 1.233 3.417 1.291C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.279-.058 2.45-.324 3.417-1.291.967-.967 1.233-2.138 1.291-3.417.058-1.279.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.324-2.45-1.291-3.417-.967-.967-2.138-1.233-3.417-1.291C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </svg>
            Instagram
            </HashLink>
        </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div>
            <p id="questions" className="text-center text-gray-400">Preguntas Frecuentes</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 text-gray-400">
                <HashLink smooth to="/questions#aplicacion-cera" title="preguntas frecuentes" className="hover:text-yellow-400 transition duration-300">¿Cómo aplico la cera o pomada para el pelo?</HashLink>
                <HashLink smooth to="/questions#beneficio-cera" title="preguntas frecuentes" className="hover:text-yellow-400 transition duration-300">¿Cuales son los beneficios de aplicar cera?</HashLink>
                <HashLink smooth to="/questions#mate-brillo" title="preguntas frecuentes" className="hover:text-yellow-400 transition duration-300">¿Que cera es mejor mate o brillo?</HashLink>
                <HashLink smooth to="/questions#beneficio-shaving" title="preguntas frecuentes" className="hover:text-yellow-400 transition duration-300">¿Cuales son los beneficios del shaving gel?</HashLink>
            </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center mt-6 text-gray-400">
            &copy; {new Date().getFullYear()} Abuelo Mario. Todos los derechos reservados.
        </div>
        <div className="text-center mt-6 text-gray-400">
            Powered by<HashLink target="_blank" to="https://ezequiel-reyes.vercel.app/"> Ezequiel Reyes</HashLink>
        </div>
    </footer>
    );
};

export default Footer;