import React from 'react';
import Sidebar from '../Menu_funcion/Menufuncion';
import './prinjefe.css';

const PrinJefe = () => {
    return (
        <div className="ventanajefe">
            <Sidebar />
            <div className="textojefe">
                <div className="contenedorjefe">
                    <h3>¡Bienvenido a TaskBoss!</h3>
                    <p>
                        Por favor selecciona una opción del menú para comenzar a gestionar tus tareas.
                        Estamos aquí para ayudarte a ser más productivo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrinJefe;
