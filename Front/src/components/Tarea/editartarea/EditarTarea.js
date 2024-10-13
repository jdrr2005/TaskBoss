import React, { useState } from 'react';
import './editarTarea.css';

const EditarTarea = ({ tarea, onActualizar, onCancelar }) => {
    const [titulo, setTitulo] = useState(tarea.titulo);
    const [descripcion, setDescripcion] = useState(tarea.descripcion);
    const [prioridad, setPrioridad] = useState(tarea.prioridad);
    const [fechaLimite, setFechaLimite] = useState(tarea.fechaLimite);
    const [responsable, setResponsable] = useState(tarea.responsable);
    const [mensaje, setMensaje] = useState('');

    const handleActualizar = () => {
        onActualizar({ titulo, descripcion, prioridad, fechaLimite, responsable });
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
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
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
