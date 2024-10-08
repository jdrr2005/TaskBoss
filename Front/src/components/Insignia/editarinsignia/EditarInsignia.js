import React, { useState } from 'react';
import './editarInsignia.css';

const EditarInsignia = ({ insignia, onActualizar, onCancelar }) => {
    const [nombre, setNombre] = useState(insignia.nombre);
    const [descripcion, setDescripcion] = useState(insignia.descripcion);
    const [puntos, setPuntos] = useState(insignia.puntos);
    const [mensaje, setMensaje] = useState('');

    const handleActualizar = () => {
    
        onActualizar({ id: insignia.id, nombre, descripcion, puntos });
        setMensaje('Insignia actualizada con éxito.');

    
        setTimeout(() => {
            setMensaje('');
        }, 3000);
    };

    return (
        <div className="editarinsigniacontainer">
            <h3 style={{ textAlign: 'center' }}>Editar Insignia</h3>
            {mensaje && <p className="mensaje-confirmacion">{mensaje}</p>}
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>
                <div>
                    <label>Puntos:</label>
                    <input type="number" value={puntos} onChange={(e) => setPuntos(e.target.value)} required />
                </div>
                <div className="botoneditcontenedor">
                    <button type="button" className="botonactu" onClick={handleActualizar}>Actualizar</button>
                    <button type="button" className="botoncance" onClick={onCancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default EditarInsignia;
