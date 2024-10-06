import React, { useState } from 'react';
import './editarUsuario.css'; // Asegúrate de tener este archivo CSS

const EditarUsuario = ({ usuario, onActualizar, onCancelar }) => {
    const [nombre, setNombre] = useState(usuario.nombre);
    const [apellido, setApellido] = useState(usuario.apellido);
    const [correo, setCorreo] = useState(usuario.correo);
    const [mensaje, setMensaje] = useState(''); // Estado para el mensaje de confirmación

    // Función para manejar la actualización del usuario
    const handleActualizar = () => {
        onActualizar({ nombre, apellido, correo }); // Llama a la función para actualizar
        setMensaje('Usuario actualizado con éxito.'); // Actualiza el mensaje

        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => {
            setMensaje(''); // Limpia el mensaje después de 3 segundos
        }, 3000);
    };

    return (
        <div className="editar-usuario-container">
            <h3>Editar Usuario</h3>
            {/* Mostrar el mensaje de confirmación si existe */}
            {mensaje && <p className="mensaje-confirmacion">{mensaje}</p>}
            <form>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Correo:</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>
                <div className="button-container"> {/* Contenedor para los botones */}
                    <button type="button" onClick={handleActualizar}>Actualizar</button>
                    <button type="button" onClick={onCancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default EditarUsuario;
