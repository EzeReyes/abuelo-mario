
const SectionOne = () => {
    return (
        <section className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white py-20 px-4">
            <div className="opacity-0 animate-fade-in delay-200">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <img src="https://i.ibb.co/0jJPHvJx/img-barberia.webp" title="barberia" alt="imagen-barberia"  className="h-80 w-auto rounded-xl shadow-lg border-4 border-white" />
            

            <div className="flex flex-col gap-4 max-w-xl text-left">
                <h1 text-md md:text-lg>Brindamos Productos para el pelo y la barba</h1>
                <p className="italic text-md md:text-lg">
                Inspirados en la tradición, creados para el presente.
                </p>
                <div className="text-2xl md:text-4xl font-medium">
                “Estilo que se siente. Productos que lo hacen posible.”
                </div>
                <a
                title="productos"
                href="#products"
                className="inline-block mt-4 text-center bg-white text-yellow-600 font-semibold px-6 py-3 rounded-full hover:bg-yellow-100 transition"
                >
                Ver productos
                </a>
            </div>
            </div>
            </div>
        </section>
    );
    }

export default SectionOne;

