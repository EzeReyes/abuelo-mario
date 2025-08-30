import { useEffect, useRef, useState } from "react";

const SectionTwo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Solo una vez
            }
        },
        { threshold: 0.3 } // Ajustá según cuándo querés que se active
        );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }

    return () => observer.disconnect();
    }, []);

    const clientes = [
        {
            name: "Matías, dueño de Barbería Sur",
            review:
                "Hace 6 meses abrí mi barbería y confié en los productos del Abuelo Mario. La verdad, más que feliz por los resultados: los clientes felices, al igual que yo. Son los mejores 🔥👌",
            image:
                "https://i.ibb.co/BKQpzmLH/img-capitan.webp",
            alt: "Reseñas de Clientes",
        },
        {
            name: "El Showroom del Barbero",
            review: "Encontra nuestros mejores productos en El Showroom del Barbero",
            image:
                "https://i.ibb.co/154Qn9T/img-showroom.webp",
            alt: "El Showroom del Barbero",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className={`px-6 md:px-16 py-12 shadow-2xl bg-gradient-to-br from-yellow-100 via-neutral-300 to-neutral-500 animate-fade-out delay-200 transition-all duration-1000 ease-out transform
                ${isVisible
                ? 'opacity-100 translate-y-0 md:translate-x-0'
                : 'opacity-0 translate-y-10 md:translate-x-20'
                }`}
            >
            <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
            Clientes que confían en nuestra trayectoria
        </h3>
        {clientes.map((cliente, index) => (
            <div
            key={index}
            className="max-w-4xl mx-auto mb-12 bg-white border-l-8 border-yellow-500 shadow-2xl rounded-3xl overflow-hidden"
            >
            <div className="flex flex-row items-center justify-center">
                <img
                src={cliente.image}
                alt={cliente.alt}
                title={cliente.alt}
                className="w-30 h-full rounded-sm md:w-1/3 md:h-auto object-cover"
                />
                <div className="p-6 md:p-8 w-full md:w-2/3">
                <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                    "{cliente.review}"
                </p>
                <p className="text-md md:text-lg font-semibold text-gray-900 text-right">
                    - {cliente.name}
                </p>
                </div>
            </div>
            </div>
        ))}
        </section>
    );
};

export default SectionTwo;