import React, { useEffect, useState } from 'react';
import api from "../../../services/api"
import Modal from '../../Confirmacion/ConfigMensaje';
import Sidebar from '../../Menu_funcion/Menufuncion';
import EditarTarea from '../editartarea/EditarTarea';
import ConfirmacionEliminacion from '../eliminartarea/EliminarTarea';
import './listarTarea.css';

const ListarTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [usuarioId, setusarioId] = useState('');
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
    const [tareaAEliminar, setTareaAEliminar] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getIdUser = () => {
            if (token) {
                const decodedToken = jwtDecode(token);
                console.log(decodedToken);
                const userId = decodedToken.user_id; // Asegúrate de que 'id' es el campo correcto
                setusarioId(userId);
            }
        };

        getIdUser(); // Llama a getIdUser cuando se monte el componente
    }, []);

    useEffect(() => {
        const fletchTareas = async () => {
            try{
                const response = await api.taskList(token);
                const tareaPorUsaurioAsignado = response.data.filter(task => task.assigned_to === usuarioId);
                setTareas(tareaPorUsaurioAsignado);
            }catch (error) {
                console.error("Error al listar tareas:", error);
            }
        }

        if (token && usuarioId) {
            fletchTareas(); // Llama a la función para obtener las tareas
        }
    }, [token]);

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
