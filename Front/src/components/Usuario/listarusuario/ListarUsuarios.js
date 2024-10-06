import React, { useState } from 'react';
import Modal from '../../Confirmacion/ConfigMensaje';
import Sidebar from '../../Menu_funcion/Menufuncion';
import EditarUsuario from '../editarusuario/EditarUsuario';
import ConfirmacionEliminacion from '../eliminacionusuario/EliminarUsuario';
import './listarUsuarios.css';

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([
        { nombre: 'Juan', apellido: 'Pérez', correo: 'juan.perez@example.com' },
        { nombre: 'Ana', apellido: 'García', correo: 'ana.garcia@example.com' },
        { nombre: 'Sebastian', apellido: 'Pineda', correo: 'spr@example.com' }
    ]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
    const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);

    const handleActualizar = (usuarioActualizado) => {
        setUsuarios((prevUsuarios) =>
            prevUsuarios.map((usuario) =>
                usuario.nombre === usuarioSeleccionado.nombre ? usuarioActualizado : usuario
            )
        );
        setMensaje('Usuario actualizado con éxito.');
        setUsuarioSeleccionado(null);
        setMostrarModal(true);
    };

    const handleEliminar = () => {
        setUsuarios((prevUsuarios) => 
            prevUsuarios.filter((usuario) => usuario.nombre !== usuarioAEliminar.nombre)
        );
        setMostrarModalEliminar(false);
        setMensaje('Usuario eliminado con éxito.');
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
        <div className="listarusuariocont">
            <Sidebar /> 
            <div className="usuariocont">
                {mostrarModal && <Modal mensaje={mensaje} onCerrar={handleCerrarModal} />}
                {mostrarModalEliminar && 
                    <ConfirmacionEliminacion 
                        onEliminar={handleEliminar} 
                        onCancelar={handleCancelarEliminar} 
                    />
                } 
                {usuarioSeleccionado ? (
                    <EditarUsuario 
                        usuario={usuarioSeleccionado} 
                        onActualizar={handleActualizar} 
                        onCancelar={() => setUsuarioSeleccionado(null)} 
                    />
                ) : (
                    <>
                        <h3>Lista de Usuarios</h3>
                        <table className="usuariotabla">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario, index) => (
                                    <tr key={index}>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.apellido}</td>
                                        <td>{usuario.correo}</td>
                                        <td>
                                            <button 
                                                className="botoneditar" 
                                                onClick={() => setUsuarioSeleccionado(usuario)}
                                            >
                                                ✏️ Editar
                                            </button>
                                            <button 
                                                className="botoneliminar" 
                                                onClick={() => { 
                                                    setUsuarioAEliminar(usuario);
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

export default ListarUsuarios;
