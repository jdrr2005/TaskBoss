import React, { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './login.css';
import authService from "../../services/api";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(formData.email, formData.password)
            .then(response => {
                console.log("Respuesta de la API:", response);
                if (response.data && response.data.access) {
                    localStorage.setItem('token', response.data.access);
                    navigate('/prinjefe');
                } else {
                    setMessage("Error: Token no encontrado en la respuesta.");
                }
            })
            .catch(error => {
                console.log(error);
                setMessage("Error al iniciar sesión: " + (error.response?.data?.detail || "Error desconocido"));
            });
    };
    
    return (
        <div className="paginalogeo">
            <div className="contenedorlogeo">
                <form onSubmit={handleSubmit}>
                    <h2 className="iniciarsesion">Iniciar Sesión</h2>
                    <div className="logeorecuadro">
                        <FaUser className="icono" />
                        <input type="text" className="campotexto" placeholder="Usuario" onChange={handleChange} name='email'/>
                    </div>
                    <div className="logeorecuadro">
                        <FaLock className="icono" />
                        <input type="password" className="campotexto" placeholder="Contraseña" onChange={handleChange} name='password'/>
                    </div>
                    <button className="botonlogeo">Entrar</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
            <div className="informacionrecuadro">
                <h1 className="tituloinfo">Bienvenido a TaskBoss</h1>
                <p className="descripcioninfo">
                    TaskBoss es una plataforma diseñada para ayudarte a gestionar tus tareas de manera eficiente.
                    Simplifica tu trabajo y aumenta tu productividad. ¡Descubre todo lo que podemos ofrecerte!
                </p>
            </div>
        </div>
    );
};

export default Login;
