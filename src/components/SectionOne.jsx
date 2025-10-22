import { HashLink } from "react-router-hash-link";
const SectionOne = () => {
    return (
        <section className="bg-gradient-to-br from-gray-500 to-white text-black py-20 px-4 width-navbar">
            <div className="opacity-0 animate-fade-in delay-200">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <img src="/images/silueta2.webp" title="productos de barberia" alt="abuelo mario, pomadas, ceras para el pelo"  className="h-90 w-auto" />
            <div className="flex flex-col gap-4 max-w-xl text-left">
                <h1 className="text-lg md:text-2xl font-bold">
                    Productos de barbería para el cuidado del pelo y la barba
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                    Descubrí nuestros productos para el pelo y la barba: pomadas con fijación flexible, ceras mate para textura natural y geles para un afeitado suave. Ideal para hombres que valoran el estilo y la autenticidad.
                </p>
                <p className="italic text-md md:text-lg">
                    Inspirados en la tradición del grooming masculino, creados para el presente.
                </p>
                <div className="text-lg md:text-4xl font-medium">
                    “Estilo que se siente. Pomadas, ceras y geles que lo hacen posible.”
                </div>
                <HashLink
                    smooth
                    to="/#products"
                    title="Ver productos de barbería"
                    className="inline-block mt-4 text-center bg-white text-yellow-600 font-semibold px-6 py-3 rounded-full hover:bg-yellow-100 transition"
                >
                    Ver todos los productos para pelo y barba
                </HashLink>
            </div>
            </div>
            </div>
        </section>
    );
    }

export default SectionOne;

