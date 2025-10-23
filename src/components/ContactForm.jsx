import { useState } from "react";
import swal from 'sweetalert';
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";

const CREAR_MENSAJE = gql`
  mutation crearMensaje($input: MessageInput!) {
    crearMensaje(input: $input) {
      id
      name
      phone
      email
      message
    }
  }
` 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    telefono: ""
  });
  const [crearMensaje] = useMutation(CREAR_MENSAJE)
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

    if (formData.telefono.trim().length >= 13) {
      newErrors.telefono = "El teléfono no debe exceder los 13 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const putMessage = async () => {
  const { nombre, email, mensaje, telefono } = formData;

  try {
    const { data } = await crearMensaje({
      variables: {
        input: {
          name: nombre,
          email,
          message: mensaje,
          phone: telefono
        }
      }
    });

    if (!data || !data.crearMensaje) {
      throw new Error("No se pudo crear el mensaje");
    }

    return data.crearMensaje;
  } catch (error) {
    console.error("Error en putMessage:", error.message);
    throw error; // Propaga el error para que handleSubmit lo capture
  }
};
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpia el error al escribir
  };

// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
// const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate() || isSubmitting) return;

  setIsSubmitting(true);

  try {
    await putMessage();
        swal("El mensaje se ha enviado correctamente!", "Tu consulta se generó exitosamente", "success");
    setFormData({ nombre: "", email: "", mensaje: "", telefono: "" });
    setErrors({});
    setIsSubmitting(false);

try {
const response = await fetch('https://abuelo-mario-backend.onrender.com/api/contact', {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

const result = await response.json();
console.log("Respuesta del backend:", result);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }
} catch (error) {
  console.error("Error en fetch:", error);
  swal("Error al enviar el mensaje", "No se pudo conectar con el servidor.", "error");
}

  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
        swal("Error al enviar el mensaje", "Por favor, intenta nuevamente más tarde.", "error");
  } 
  
};

  return (
    <section id="contact" className="bg-linear-to-t from-yellow-100 via-neutral-200 to-neutral-400 py-16 px-6 md:px-20">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Contáctanos
      </h3>

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
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.nombre ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
            }`}
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </div>

        <div>
          <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">Teléfono (opcional)</label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.telefono ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
            }`}
          />
          {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
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
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 ${
              errors.mensaje ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
            }`}
          ></textarea>
          {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-semibold py-3 rounded-lg transition duration-300 ${
            isSubmitting
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-yellow-500 text-white hover:bg-yellow-600"
          }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;