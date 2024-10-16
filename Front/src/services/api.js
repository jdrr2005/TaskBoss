// src/services/api.js
import axios from 'axios';

const urlApi = "http://127.0.0.1:8000/usuarios/";

const api = {
    login: (email, password) => {
        return axios.post(`${urlApi}token/`, {
            email,
            password
        });
    },

    register: (nombre, apellido, email, contrasena, rol, token) => {
        return axios.post(`${urlApi}create/`, {
            nombre,
            apellido,
            email,
            contrasena,
            rol
        }, {
            headers: {
                'Authorization': `Bearer ${token}` // Agregar el token en el encabezado
            }
        });
    },

    userList: (token) => {
        return axios.get(`${urlApi}getList/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },

    userUpdate: (id, datosActualizados, token) => {
        return axios.patch(`${urlApi}UpdateModifyDestroy/${id}`, datosActualizados, {
            headers: {
                'Authorization': `Bearer ${token}` // Agregar el token en el encabezado
            }
        });
    },

    userDelete: (id, token) => {
        return axios.delete(`${urlApi}UpdateModifyDestroy/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}` // Agregar el token en el encabezado
            }
        });
    },
};
export default api;
