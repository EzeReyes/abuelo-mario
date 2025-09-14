import { Link } from "react-router-dom";

const Encabezado = ({titulo}) => {

    const q = "Preguntas Frecuentes"

    return (
        <>
        <div className='text-start m-10 w-full text-lg'>
            <Link
            className={`${titulo === q ? 'hover:text-white' : 'hover:text-gray-600'} text-gray-500 hover:underline`}
            to="/"
            >
            Home
            </Link>            
                <span className='text-gray-500'> / </span>
            <Link 
            className={`${titulo === q ? 'hover:text-white' : 'hover:text-gray-600'} text-gray-500 hover:underline`}
            to={'.'}
            >{titulo}</Link>
        </div>
        <h1 className='text-center font-bold text-2xl pt-10 text-shadow-lg'>Sección {titulo}</h1>
        </>
    )
}

export default Encabezado;