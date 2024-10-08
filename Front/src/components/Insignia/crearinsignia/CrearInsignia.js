import React, { useState } from 'react';
import Sidebar from '../../Menu_funcion/Menufuncion';
import './crearInsignia.css';

const CrearInsignia = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [puntos, setPuntos] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Insignia creada:', { nombre, descripcion, puntos }); 
        setIsModalVisible(true);
        setNombre('');
        setDescripcion('');
        setPuntos('');
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="crearinsigniacontainer">
            <Sidebar />
            <div className="vistacrearinsignia">
                <div className="cajacrearinsignia">
                    <h3>Crear Insignia</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                        />
                        <label>Descripción:</label>
                        <input 
                            type="text" 
                            value={descripcion} 
                            onChange={(e) => setDescripcion(e.target.value)} 
                            required 
                        />
                        <label>Puntos:</label>
                        <input 
                            type="number" 
                            value={puntos} 
                            onChange={(e) => setPuntos(e.target.value)} 
                            required 
                        />
                        <button type="submit">Crear Insignia</button>
                    </form>
                </div>
            </div>

            {isModalVisible && (
                <div className="confirmacion">
                    <div className="contenidocontenedor">
                        <span className="salida" onClick={handleCloseModal}>&times;</span>
                        <h4>Insignia creada exitosamente</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CrearInsignia;
