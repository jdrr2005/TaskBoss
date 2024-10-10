// src/services/api.js
import axios from 'axios';

const urlApi = "http://127.0.0.1:8000/usuarios/";

const api = {
    login: (email, password) => {
        return axios.post(`${urlApi}token/`, {
            email,
            password
        })
    }

}
export default api;
