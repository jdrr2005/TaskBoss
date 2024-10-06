import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Logeo/Login';
import PrinJefe from './components/Prin_jefe/prinjefe'; // Revisa si la ruta es correcta
import CrearUsuario from './components/Usuario/crearusuario/CrearUsuario';
import ListarUsuario from './components/Usuario/listarusuario/ListarUsuarios';
import Usuario from './components/Usuario/principal/Usuario'; // Asegúrate de importar Usuarios

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/prinjefe" element={<PrinJefe />} />
                <Route path="/usuarios" element={<Usuario />} /> {/* Ruta para Usuarios */}
                <Route path="/crear-usuario" element={<CrearUsuario />} /> {/* Ruta para Crear Usuario */}
                <Route path="/listar-usuario" element={<ListarUsuario />} /> {/* Ruta para Listar Usuario */}
            </Routes>
        </Router>
    );
};

export default App;
