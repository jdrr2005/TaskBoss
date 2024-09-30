import axios from 'axios'

export const getAllTareas = () =>{
    return axios.get('http://127.0.0.1:8000/tareas/api/tareas/tareas/')
}