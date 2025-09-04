import { HashLink } from "react-router-hash-link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Ups... no encontramos esta página.
      </p>
      <HashLink
        to="/"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Volver al inicio
      </HashLink>
    </div>
  );
};

export default NotFound;