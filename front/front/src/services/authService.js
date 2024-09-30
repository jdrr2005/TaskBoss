import axios from 'axios';

// Base URL de tu API (asegúrate de tenerla configurada correctamente)
const API_URL = "http://localhost:8000/users/";

const authService = {
    register: (email, password, username, first_name) => {
        return axios.post(`${API_URL}create/`, {
            email,
            password,
            username,
            first_name
        });
    },

    login: (username, password) => {
        return axios.post(`${API_URL}token/`, {
            username,
            password
        });
    },

    updateUser: (token, data) => {
        return axios.put(`${API_URL}user/`, data, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
    }
};

export default authService;
