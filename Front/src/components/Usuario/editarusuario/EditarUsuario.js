import React, { useState } from 'react';
import './editarUsuario.css';

const EditarUsuario = ({ usuario, onActualizar, onCancelar }) => {
    const [nombre, setNombre] = useState(usuario.nombre);
    const [apellido, setApellido] = useState(usuario.apellido);
    const [correo, setCorreo] = useState(usuario.correo);
    const [rol, setRol] = useState(usuario.rol);
    const [mensaje, setMensaje] = useState('');

    const handleActualizar = () => {
        onActualizar({ nombre, apellido, correo });
        setMensaje('Usuario actualizado con éxito.');

        setTimeout(() => {
            setMensaje('');
        }, 3000);
    };

    return (
        <div className="editarusuariocontenedor">
            <h3 style={{ textAlign: 'center' }}>Editar Usuario</h3>
            {mensaje && <p className="mensajeconfirmacion">{mensaje}</p>}
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                </div>
                <div>
                    <label>Rol:</label>
                    <select value={rol} onChange={(e) => setRol(e.target.value)} required>
                        <option value="Empleado">Empleado</option>
                        <option value="Jefe">Jefe</option>
                    </select>
                </div>
                <div className="contenedorboton">
                    <button type="boton" onClick={handleActualizar}>Actualizar</button>
                    <button type="boton" onClick={onCancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default EditarUsuario;
