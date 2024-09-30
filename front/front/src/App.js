import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardJefe from './components/DashboardJefe'; // Ruta al dashboard
import Login from './components/Login'; // Asegúrate de tener el Login en la carpeta correcta

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige al login */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardJefe />} /> {/* Redirige al Dashboard */}
            </Routes>
        </Router>
    );
};

export default App;
