import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate(); // Hook para redireccionar

    const handleLogin = () => {
        // Aquí puedes agregar la lógica de autenticación
        // Si todo está bien, redirige al dashboard
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Iniciar Sesión</h2>
                <input type="text" className="login-input" placeholder="Usuario" />
                <input type="password" className="login-input" placeholder="Contraseña" />
                <button className="login-button" onClick={handleLogin}>Entrar</button> {/* Llama a handleLogin al hacer clic */}
            </div>
            <div className="intro-section">
                <h1 className="intro-title">Bienvenido a TaskBoss</h1>
                <p className="intro-description">
                    TaskBoss es una plataforma diseñada para ayudarte a gestionar tus tareas de manera eficiente.
                    Simplifica tu trabajo y aumenta tu productividad. ¡Descubre todo lo que podemos ofrecerte!
                </p>
            </div>
        </div>
    );
};

export default Login;
