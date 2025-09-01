import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "El email no tiene un formato válido.";
    }

    if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpia el error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje!");
    setFormData({ nombre: "", email: "", mensaje: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-yellow-100 via-neutral-200 to-neutral-400 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Contáctanos
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8 space-y-6"
      >
        <div>
          <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.nombre ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
            }`}
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            id="message"
            required
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 ${
              errors.mensaje ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
            }`}
          ></textarea>
          {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default ContactForm;