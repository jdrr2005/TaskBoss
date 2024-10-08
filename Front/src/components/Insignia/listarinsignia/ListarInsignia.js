import React, { useState } from 'react';
import Modal from '../../Confirmacion/ConfigMensaje';
import Sidebar from '../../Menu_funcion/Menufuncion';
import EditarInsignia from '../editarinsignia/EditarInsignia';
import ConfirmacionEliminacion from '../eliminarinsignia/EliminarInsignia';
import './listarInsignia.css';

const ListarInsignias = () => {
    const [insignias, setInsignias] = useState([
        { id: 1, nombre: 'Insignia 1', descripcion: 'Descripción de Insignia 1', puntos: 100 },
        { id: 2, nombre: 'Insignia 2', descripcion: 'Descripción de Insignia 2', puntos: 200 },
        { id: 3, nombre: 'Insignia 3', descripcion: 'Descripción de Insignia 3', puntos: 150 }
    ]);
    const [insigniaSeleccionada, setInsigniaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState(''); 
    const [mostrarModal, setMostrarModal] = useState(false); 
    const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
    const [insigniaAEliminar, setInsigniaAEliminar] = useState(null);

    const handleActualizar = (insigniaActualizada) => {
        setInsignias((prevInsignias) =>
            prevInsignias.map((insignia) =>
                insignia.id === insigniaSeleccionada.id ? insigniaActualizada : insignia
            )
        );
        setMensaje('Insignia actualizada con éxito.');
        setInsigniaSeleccionada(null);
        setMostrarModal(true);
    };

    const handleEliminar = () => {
        setInsignias((prevInsignias) => 
            prevInsignias.filter((insignia) => insignia.id !== insigniaAEliminar.id)
        );
        setMostrarModalEliminar(false);
        setMensaje('Insignia eliminada con éxito.');
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
        <div className="listarinsigniascont">
            <Sidebar />
            <div className="insigniascont">
                {mostrarModal && <Modal mensaje={mensaje} onCerrar={handleCerrarModal} />}
                {mostrarModalEliminar && 
                    <ConfirmacionEliminacion 
                        onEliminar={handleEliminar} 
                        onCancelar={handleCancelarEliminar} 
                    />
                }
                {insigniaSeleccionada ? (
                    <EditarInsignia 
                        insignia={insigniaSeleccionada} 
                        onActualizar={handleActualizar} 
                        onCancelar={() => setInsigniaSeleccionada(null)} 
                    />
                ) : (
                    <>
                        <h3>Lista de Insignias</h3>
                        <table className="insigniastabla">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Puntos</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {insignias.map((insignia) => (
                                    <tr key={insignia.id}>
                                        <td>{insignia.nombre}</td>
                                        <td>{insignia.descripcion}</td>
                                        <td>{insignia.puntos}</td>
                                        <td>
                                            <button 
                                                className="botoneditarli" 
                                                onClick={() => setInsigniaSeleccionada(insignia)}
                                            >
                                                ✏️ Editar
                                            </button>
                                            <button 
                                                className="botoneliminarli" 
                                                onClick={() => { 
                                                    setInsigniaAEliminar(insignia); 
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

export default ListarInsignias;
