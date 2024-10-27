import React, { useState } from 'react';
import Sidebar from '../Menu_funcion/Menufuncion';
import './perfiljefe.css';

const PerfilJefe = () => {
    const [usuario] = useState({
        nombre: 'Carolina',
        apellido: 'Gómez',
        correo: 'carolina.gomez@ejemplo.com',
        rol: 'Jefe de Proyecto',
    });

    return (
        <div className="contenedorperfiljefe">
            <Sidebar />
            <div className="contenidoperfiljefe">
                <div className="perfiljefetarjeta">
                    <div className="perfiljefeheader">
                        <span role="img" aria-label="emoji" className="perfiljefeemoji">
                            👩‍💼
                        </span>
                        <h2>{usuario.nombre} {usuario.apellido}</h2>
                    </div>
                    <div className="perfiljefeinfo">
                        <p><strong>Nombre:</strong> {usuario.nombre}</p>
                        <p><strong>Apellido:</strong> {usuario.apellido}</p>
                        <p><strong>Correo:</strong> {usuario.correo}</p>
                        <p><strong>Rol:</strong> {usuario.rol}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfilJefe;
