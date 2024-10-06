import React, { useState } from 'react';
import Sidebar from '../../Menu_funcion/Menufuncion'; // Asegúrate de que la ruta es correcta
import EditarUsuario from '../editarusuario/EditarUsuario'; // Importa el componente de edición
import './listarUsuarios.css'; // Asegúrate de crear un archivo CSS para estilos

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([
        { nombre: 'Juan', apellido: 'Pérez', correo: 'juan.perez@example.com' },
        { nombre: 'Ana', apellido: 'García', correo: 'ana.garcia@example.com' },
        { nombre: 'Sebastian', apellido: 'Pineda', correo: 'spr@example.com' }
        // Agrega más usuarios aquí si es necesario
    ]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null); // Estado para el usuario seleccionado

    const handleActualizar = (usuarioActualizado) => {
        setUsuarios((prevUsuarios) =>
            prevUsuarios.map((usuario) =>
                usuario.nombre === usuarioSeleccionado.nombre ? usuarioActualizado : usuario
            )
        );
        setUsuarioSeleccionado(null); // Cierra el formulario después de actualizar
    };

    return (
        <div className="listar-usuarios-container">
            <Sidebar /> {/* Aquí se coloca la barra de menú */}
            <div className="usuarios-content">
                {usuarioSeleccionado ? ( // Condición para mostrar el formulario de edición
                    <EditarUsuario 
                        usuario={usuarioSeleccionado} 
                        onActualizar={handleActualizar} 
                        onCancelar={() => setUsuarioSeleccionado(null)} 
                    />
                ) : (
                    <>
                        <h3>Lista de Usuarios</h3>
                        <table className="usuarios-table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Acciones</th> {/* Nueva columna para las acciones */}
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
                                                className="edit-button" 
                                                onClick={() => setUsuarioSeleccionado(usuario)} // Establece el usuario seleccionado al hacer clic
                                            >
                                                ✏️ Editar
                                            </button>
                                            <button className="delete-button">🗑️ Borrar</button> {/* Ícono de borrar */}
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
