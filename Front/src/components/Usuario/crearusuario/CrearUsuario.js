import React, { useState } from 'react';
import Sidebar from '../../Menu_funcion/Menufuncion';
import './crearUsuario.css';

const CrearUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('Empleado');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario creado:', { nombre, apellido, correo, contrasena });
        setIsModalVisible(true);
        setNombre('');
        setApellido('');
        setCorreo('');
        setContrasena('');
        setRol('Empleado'); 
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="crearusuariocontainer">
            <Sidebar />
            <div className="vistacrearusuario">
                <div className="cajacrearusuario">
                    <h3>Crear Usuario</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                        />
                        <label>Apellido:</label>
                        <input 
                            type="text" 
                            value={apellido} 
                            onChange={(e) => setApellido(e.target.value)} 
                            required 
                        />
                        <label>Correo:</label>
                        <input 
                            type="email" 
                            value={correo} 
                            onChange={(e) => setCorreo(e.target.value)} 
                            required 
                        />
                        <label>Contraseña:</label>
                        <input 
                            type="password" 
                            value={contrasena} 
                            onChange={(e) => setContrasena(e.target.value)} 
                            required 
                        />
                        <label>Rol:</label>
                        <select 
                            value={rol} 
                            onChange={(e) => setRol(e.target.value)} 
                            required
                        >
                            <option value="Empleado">Empleado</option>
                            <option value="Jefe">Jefe</option>
                        </select>
                        <button type="submit">Crear Usuario</button>
                    </form>
                </div>
            </div>

            {/* Ventana modal de confirmación */}
            {isModalVisible && (
                <div className="confirmacion">
                    <div className="contenidocontendor">
                        <span className="salida" onClick={handleCloseModal}>&times;</span>
                        <h4>Usuario creado exitosamente</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CrearUsuario;
