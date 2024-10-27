import React, { useState } from 'react';
import BarraLateral from '../MenuEmpleado/Menuempleado';
import './tareaempleado.css';

const TareaEmpleado = () => {
    const [tareasPorHacer, setTareasPorHacer] = useState([
        { titulo: 'Diseñar el dashboard de usuarios' },
        { titulo: 'Implementar autenticación segura' },
        { titulo: 'Revisar el sistema de notificaciones' }
    ]);

    const [tareasTerminadas, setTareasTerminadas] = useState([
        { titulo: 'Configurar base de datos' },
        { titulo: 'Implementar login' },
        { titulo: 'Diseñar el sidebar' }
    ]);

    const marcarComoHecho = (index) => {
        const tarea = tareasPorHacer[index];
        setTareasPorHacer(tareasPorHacer.filter((_, i) => i !== index));
        setTareasTerminadas([...tareasTerminadas, tarea]);
    };

    return (
        <div className="contenedorprincipal">
            <BarraLateral />
            <div className="contenedortareas">
                <div className="cuadrotareas">
                    <h2>Tareas por Hacer</h2>
                    <ul className="listatareas">
                        {tareasPorHacer.map((tarea, index) => (
                            <li key={index}>
                                {tarea.titulo}
                                <button
                                    className="botonhecho"
                                    onClick={() => marcarComoHecho(index)}
                                >
                                    Hecho
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="cuadrotareas">
                    <h2>Tareas Terminadas</h2>
                    <ul className="listatareas">
                        {tareasTerminadas.map((tarea, index) => (
                            <li key={index}>
                                {tarea.titulo}
                                <span className="tareaestado">Terminada</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TareaEmpleado;
