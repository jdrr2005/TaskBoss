import React, { useState } from 'react';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../Menu_funcion/menufuncion.css';

const MenuEmpleado = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const navegar = useNavigate();

    const manejarToggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    const manejarCerrarSesion = () => {
        // Eliminar el token del localStorage
        localStorage.removeItem('token');
        
        // Redirigir al usuario a la página de inicio de sesión o donde desees
        navegar('/');
    };

    return (
        <div className="contenedorbarralateral">
            <div className="encabezadodashboard">
                {!mostrarMenu && (
                    <div className="iconomenu" onClick={manejarToggleMenu}>
                        <FaBars />
                    </div>
                )}
            </div>
            {mostrarMenu && (
                <div className="barralateral">
                    <div className="iconovolver" onClick={manejarToggleMenu}>
                        <FaArrowLeft />
                    </div>
                    <ul>
                        <li><button onClick={() => navegar('/tareaempleado')}>Tareas</button></li>
                        <li><button onClick={() => navegar('/insigniaempleado')}>Insignias</button></li>
                        <li><button onClick={() => navegar('/perfilempleado')}>Perfil</button></li>
                        <li><button onClick={() => navegar('/encuestaempleado')}>Encuestas</button></li>
                    </ul>
                    <div className="contenedorcerrarsesion">
                        <button className="botoncerrarsesion" onClick={manejarCerrarSesion}>Cerrar Sesión</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuEmpleado;
