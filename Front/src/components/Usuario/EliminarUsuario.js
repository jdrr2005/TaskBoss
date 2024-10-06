import React from 'react';
import './eliminarUsuario.css'; // Asegúrate de que la ruta sea correcta

const ConfirmacionEliminacion = ({ onEliminar, onCancelar }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h4>¿Estás seguro de que deseas eliminar este usuario?</h4>
                <div className="button-container">
                    <button className="modal-button confirm" onClick={onEliminar}>Sí</button>
                    <button className="modal-button cancel" onClick={onCancelar}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmacionEliminacion;
