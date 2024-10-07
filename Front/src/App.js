import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Logeo/Login';
import PrinJefe from './components/Prin_jefe/prinjefe';
import CrearTarea from './components/Tareas/creartarea/CrearTarea';
import ListarTareas from './components/Tareas/listartarea/ListarTarea';
import Tareas from './components/Tareas/principaltarea/Tarea';
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
                <Route path="/tareas" element={<Tareas/>}/>
                <Route path="/crear-tarea" element={<CrearTarea/>}/>
                <Route path="/listar-tarea" element={<ListarTareas/>}/>
            </Routes>
        </Router>
    );
};

export default App;
