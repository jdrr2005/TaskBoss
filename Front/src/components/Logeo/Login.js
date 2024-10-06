import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        //  lógica de autenticación
        
        navigate('/prinjefe');
    };

    return (
        <div className="paginalogeo">
            <div className="contenedorlogeo">
                <h2 className="iniciarsesion">Iniciar Sesión</h2>
                <div className="logeorecuadro">
                    <FaUser className="icono" />
                    <input type="text" className="campotexto" placeholder="Usuario" />
                </div>
                <div className="logeorecuadro">
                    <FaLock className="icono" />
                    <input type="password" className="campotexto" placeholder="Contraseña" />
                </div>
                <button className="botonlogeo" onClick={handleLogin}>Entrar</button>
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
