import React, { useState } from "react";
import authService from "../services/authService";

const UpdateUser = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        first_name: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        authService.updateUser(token, formData)
            .then(response => {
                setMessage("Usuario actualizado exitosamente.");
            })
            .catch(error => {
                setMessage("Error al actualizar: " + error.response.data.detail);
            });
    };

    return (
        <div>
            <h2>Actualizar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
                <input name="username" type="text" placeholder="Usuario" onChange={handleChange} />
                <input name="first_name" type="text" placeholder="Nombre" onChange={handleChange} />
                <button type="submit">Actualizar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateUser;
