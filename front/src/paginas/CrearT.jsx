import {useForm} from 'react-hook-form'

export function CrearT() {
  const {register, handleSubmit, formState: {errros}}= useForm()
  const onSubmit = handleSubmit(data => {console.log(data)})
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="titulo" {...register('titulo', {required:true})}/>
          <textarea rows={3} placeholder="Descripción" {...register('descripcion', {required:true})}></textarea>
          <input type="number" placeholder="Prioridad" min={1} max={5} {...register('prioridad', {required:true})}/>
          <select placeholder='estado' >
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En Proceso</option>
            <option value="completada">Completada</option>
          </select>
          <input type="datetime-local" placeholder="Fecha Limite de entrega" {...register('fechalim', {required:true})}/>
          <select placeholder='Quien asigna'>
            <option value="dos">dos</option>
            <option value="uno">Uno</option>
          </select>
          <select placeholder='Responsable'>
            <option value="dos">dos</option>
            <option value="uno">Uno</option>
          </select>
          <input type="number" placeholder="Puntos" {...register('puntos', {required:true})}/>
          <button>Guardar</button>
          
        </form>




      </div>
    )
  }
  