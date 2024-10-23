import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CrearInsignia from './components/Insignia/crearinsignia/CrearInsignia';
import ListarInsignias from './components/Insignia/listarinsignia/ListarInsignia';
import Insignias from './components/Insignia/principal/Insignia';
import InsigniaEmpleado from './components/InsigniaEmpleado/Insigniaempleado';
import Login from './components/Logeo/Login';
import PerfilEmpleado from './components/PerfilEmpleado/perfilempleado';
import PerfilJefe from './components/PerfilJefe/Perfiljefe';
import PrinEmpleado from './components/Prin_Empleado/prinempleado';
import PrinJefe from './components/Prin_jefe/prinjefe';
import Progreso from './components/Progreso/Progreso';
import CrearTarea from './components/Tarea/creartarea/CrearTarea';
import ListarTareas from './components/Tarea/listartarea/ListarTarea';
import Tareas from './components/Tarea/principaltarea/Tarea';
import TareaEmpleado from './components/TareaEmpleado/tareaEmpleado';
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
                <Route path="/insignias" element={<Insignias/>} />
                <Route path="/crear-insignia" element={<CrearInsignia/>}/>
                <Route path="/listar-insignias" element={<ListarInsignias/>}/>
                <Route path="/progreso" element={<Progreso/>}/>
                <Route path="/perfiljefe" element={<PerfilJefe/>}/>
                <Route path="/prinempleado" element={<PrinEmpleado/>}/>
                <Route path="/perfilempleado" element={<PerfilEmpleado/>}/>
                <Route path="/insigniaempleado" element={<InsigniaEmpleado/>}/>
                <Route path="/tareaempleado" element={<TareaEmpleado/>}/>
            </Routes>
        </Router>
    );
};

export default App;
