import React, { useState } from 'react';
import Sidebar from '../MenuEmpleado/Menuempleado';
import './perfilempleado.css';

const PerfilEmpleado = () => {
    const [usuario] = useState({
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'juan.perez@ejemplo.com',
        rol: 'Administrador',
        logros: ['Empleado del Mes', 'Certificación en React', 'Proyecto del Año', 'Reconocimiento en Innovación'],
    });

    return (
        <div className="contenedorperfil">
            <Sidebar /> 
            <div className="contenidoperfil">
                <div className="perfiltarjeta">
                    <div className="perfilheader">
                        <span role="img" aria-label="emoji" className="perfilemoji">
                            🚀
                        </span>
                        <h2>{usuario.nombre} {usuario.apellido}</h2>
                    </div>
                    <div className="perfilinfo">
                        <p><strong>Nombre:</strong> {usuario.nombre}</p>
                        <p><strong>Apellido:</strong> {usuario.apellido}</p>
                        <p><strong>Correo:</strong> {usuario.correo}</p>
                        <p><strong>Rol:</strong> {usuario.rol}</p>
                    </div>
                </div>

                <div className="perfillogros">
                    <h3>Logros Destacados</h3>
                    <ul className="perfillistalogros">
                        {usuario.logros.map((logro, index) => (
                            <li key={index} className="perfillogroitem">{logro}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PerfilEmpleado;
