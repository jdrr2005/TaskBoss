import { useEffect, useState } from "react"
import { LisTareas } from "../componentes/LisTareas"
import { getAllTareas } from "../Api/Tareas_api"
import { TareasCard } from "../componentes/TareasCard"

export function ListarT() {

  const [tareas, setTareas] = useState([])

  useEffect(() => {
    async function loadTarea(){
      const res = await getAllTareas();
      setTareas(res.data)  
    }
    loadTarea();
  }, []);
  
  return (
    <div>
      {tareas.map(tarea => (
        <TareasCard key={tarea.IDtarea} tarea={tarea} />
      ))}
    </div>
  )
}
