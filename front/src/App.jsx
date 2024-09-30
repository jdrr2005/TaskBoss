import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CrearT } from './paginas/CrearT'
import { ListarT } from './paginas/ListarT'
import { Navigation } from './componentes/navegar'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Navigate to='/CrearTarea'/>}/>
      <Route path='/CrearTarea' element={<CrearT/>}/>
      <Route path='/Tareas' element={<ListarT/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App