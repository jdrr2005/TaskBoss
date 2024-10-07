import React, { useState } from 'react';
import Modal from '../../Confirmacion/ConfigMensaje';
import Sidebar from '../../Menu_funcion/Menufuncion';
import EditarTarea from '../editartarea/EditarTarea';
import ConfirmacionEliminacion from '../eliminartarea/EliminarTarea';
import './listarTarea.css';

const ListarTareas = () => {
    const [tareas, setTareas] = useState([
        {
            titulo: 'Tarea 1',
            descripcion: 'Descripción de la tarea 1',
            prioridad: '5',
            fechaLimite: '2024-10-10',
            responsable: 'Juan Pérez'
        },
        {
            titulo: 'Tarea 2',
            descripcion: 'Descripción de la tarea 2',
            prioridad: '3',
            fechaLimite: '2024-10-12',
            responsable: 'María López'
        },
        {
            titulo: 'Tarea 3',
            descripcion: 'Descripción de la tarea 3',
            prioridad: '1',
            fechaLimite: '2024-10-15',
            responsable: 'Carlos García'
        }
    ]);
    
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
    const [tareaAEliminar, setTareaAEliminar] = useState(null);

    const handleActualizar = (tareaActualizada) => {
        setTareas((prevTareas) =>
            prevTareas.map((tarea) =>
                tarea.titulo === tareaSeleccionada.titulo ? tareaActualizada : tarea
            )
        );
        setMensaje('Tarea actualizada con éxito.');
        setTareaSeleccionada(null);
        setMostrarModal(true);
    };

    const handleEliminar = () => {
        setTareas((prevTareas) =>
            prevTareas.filter((tarea) => tarea.titulo !== tareaAEliminar.titulo)
        );
        setMostrarModalEliminar(false);
        setMensaje('Tarea eliminada con éxito.');
        setMostrarModal(true);
    };

    const handleCerrarModal = () => {
        setMostrarModal(false);
        setMensaje('');
    };

    const handleCancelarEliminar = () => {
        setMostrarModalEliminar(false);
    };

    return (
        <div className="listar-tareas-container">
            <Sidebar />
            <div className="tareas-content">
                {mostrarModal && <Modal mensaje={mensaje} onCerrar={handleCerrarModal} />}
                {mostrarModalEliminar && (
                    <ConfirmacionEliminacion
                        onEliminar={handleEliminar}
                        onCancelar={handleCancelarEliminar}
                    />
                )}
                {tareaSeleccionada ? (
                    <EditarTarea
                        tarea={tareaSeleccionada}
                        onActualizar={handleActualizar}
                        onCancelar={() => setTareaSeleccionada(null)}
                    />
                ) : (
                    <>
                        <h3>Lista de Tareas</h3>
                        <table className="tareas-table">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descripción</th>
                                    <th>Prioridad</th>
                                    <th>Fecha Límite</th>
                                    <th>Responsable</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tareas.map((tarea, index) => (
                                    <tr key={index}>
                                        <td>{tarea.titulo}</td>
                                        <td>{tarea.descripcion}</td>
                                        <td>{tarea.prioridad}</td>
                                        <td>{tarea.fechaLimite}</td>
                                        <td>{tarea.responsable}</td>
                                        <td>
                                            <button
                                                className="edit-button"
                                                onClick={() => setTareaSeleccionada(tarea)}
                                            >
                                                ✏️ Editar
                                            </button>
                                            <button
                                                className="delete-button"
                                                onClick={() => {
                                                    setTareaAEliminar(tarea);
                                                    setMostrarModalEliminar(true);
                                                }}
                                            >
                                                🗑️ Borrar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default ListarTareas;
