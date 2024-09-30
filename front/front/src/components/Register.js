import React, { useState } from "react";
import authService from "../services/authService";

const Register = () => {
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
        authService.register(formData.email, formData.password, formData.username, formData.first_name)
            .then(response => {
                setMessage("Usuario registrado exitosamente.");
            })
            .catch(error => {
                setMessage("Error al registrar: " + error.response.data.detail);
            });
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
                <input name="username" type="text" placeholder="Usuario" onChange={handleChange} required />
                <input name="first_name" type="text" placeholder="Nombre" onChange={handleChange} required />
                <button type="submit">Registrarse</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
