import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div>
            <Link to='/ListarTareas'>
                <h1>TareasPendientes</h1>
            </Link>
            <Link to="/CrearTarea"> CrearTarea</Link>
        </div>
    )
}

