import React, { useState } from 'react';
import Sidebar from '../../Menu_funcion/Menufuncion';
import './crearTarea.css';

const CrearTarea = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [fechaLimite, setFechaLimite] = useState('');
    const [asignarA, setAsignarA] = useState('');
    const [puntos, setPuntos] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tarea creada:', { titulo, descripcion, prioridad, fechaLimite, asignarA, puntos });
        setIsModalVisible(true);
        setTitulo('');
        setDescripcion('');
        setPrioridad('');
        setFechaLimite('');
        setAsignarA('');
        setPuntos('');
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="creartareacontainer">
            <Sidebar />
            <div className="vistacreartarea">
                <div className="cajacreartarea">
                    <h3>Crear Tarea</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Título:</label>
                        <input 
                            type="text" 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                            required 
                        />
                        <label>Descripción:</label>
                        <input 
                            type="text" 
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)} 
                            required 
                        />
                        <label>Prioridad:</label>
                        <select 
                            value={prioridad} 
                            onChange={(e) => setPrioridad(e.target.value)} 
                            required
                        >
                            <option value="">Seleccione</option>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                        <label>Fecha Límite:</label>
                        <input 
                            type="date" 
                            value={fechaLimite} 
                            onChange={(e) => setFechaLimite(e.target.value)} 
                            required 
                        />
                        <label>Asignar A:</label>
                        <input 
                            type="text" 
                            value={asignarA} 
                            onChange={(e) => setAsignarA(e.target.value)} 
                            required 
                        />
                        <label>Puntos:</label>
                        <input 
                            type="number" 
                            value={puntos} 
                            onChange={(e) => setPuntos(e.target.value)} 
                            required 
                        />
                        <button type="submit">Crear Tarea</button>
                    </form>
                </div>
            </div>

            {isModalVisible && (
                <div className="confirmacion">
                    <div className="contenidocontendor">
                        <span className="salida" onClick={handleCloseModal}>&times;</span>
                        <h4>Tarea creada exitosamente</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CrearTarea;
