import React, { useEffect, useState } from 'react';
import './editarTarea.css';

const EditarTarea = ({ tarea, onActualizar, onCancelar }) => {
    const [titulo, setTitulo] = useState(tarea.titulo || '');
    const [descripcion, setDescripcion] = useState(tarea.descripcion || '');
    const [prioridad, setPrioridad] = useState(tarea.prioridad || 'Baja');
    const [fechaLimite, setFechaLimite] = useState(tarea.fechaLimite || '');
    const [responsable, setResponsable] = useState(tarea.responsable || '');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (tarea) {
            setTitulo(tarea.title || '');
            setDescripcion(tarea.description || '');
            setPrioridad(tarea.priority || 'Baja');
            setFechaLimite(tarea.deadline || '');
            setResponsable(tarea.assigned_to || '');
        }
    }, [tarea]); // El useEffect se dispara cuando la tarea cambia

    const handleActualizar = (e) => {
        e.preventDefault();
        onActualizar({ 
            ...tarea,
            titulo, 
            descripcion, 
            prioridad, 
            fechaLimite, 
            responsable 
        });
        setMensaje('Tarea actualizada con éxito.');
        setTimeout(() => {
            setMensaje('');
        }, 3000);
    };

    return (
        <div className="editartareacont">
            <h3>Editar Tarea</h3>
            {mensaje && <p className="mensajeconfirmaciont">{mensaje}</p>}
            <form>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Prioridad:</label>
                    <select
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                        required
                    >
                        <option value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </select>
                </div>
                <div>
                    <label>Fecha Límite:</label>
                    <input
                        type="date"
                        value={fechaLimite}
                        onChange={(e) => setFechaLimite(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Responsable:</label>
                    <input
                        type="text"
                        value={responsable}
                        onChange={(e) => setResponsable(e.target.value)}
                        required
                    />
                </div>
                <div className="botoncontt">
                    <button type="button" className="editar" onClick={handleActualizar}>
                        Actualizar
                    </button>
                    <button type="button" className="cancelar" onClick={onCancelar}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarTarea;
