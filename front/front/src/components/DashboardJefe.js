import React from 'react';
import './dashboardjefe.css';

const DashboardJefe = () => {
    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-container">
                <div className="dashboard-card">Usuarios</div>
                <div className="dashboard-card">Tareas</div>
                <div className="dashboard-card">Insignias</div>
                <div className="dashboard-card">Progreso</div>
                <div className="dashboard-card">Encuestas</div>
            </div>
        </div>
    );
};

export default DashboardJefe;
