import React from 'react';
import Sidebar from '../MenuEmpleado/Menuempleado';
import './prinempleado.css';

const PrinEmpleado = () => {
    return (
        <div className="ventanaempleado">
            <Sidebar />
            <div className="textoempleado">
                <div className="contenedorempleado">
                    <h3>¡Bienvenido a TaskBoss!</h3>
                    <p>
                        Aquí puedes gestionar tus tareas asignadas, verificar tu progreso y
                        revisar las insignias obtenidas. ¡Vamos a hacer grandes cosas!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrinEmpleado;
