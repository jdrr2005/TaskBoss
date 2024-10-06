import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Logeo/Login';
import PrinJefe from './components/Prin_jefe/prinjefe';
import CrearUsuario from './components/Usuario/crearusuario/CrearUsuario';
import ListarUsuario from './components/Usuario/listarusuario/ListarUsuarios';
import Usuario from './components/Usuario/principal/Usuario';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/prinjefe" element={<PrinJefe />} />
                <Route path="/usuarios" element={<Usuario />} />
                <Route path="/crear-usuario" element={<CrearUsuario />} />
                <Route path="/listar-usuario" element={<ListarUsuario />} />
                </Routes>
        </Router>
    );
};

export default App;
