import { Outlet } from "react-router-dom";
import "./styles.css"

export default function Form() {
    return (
        <>
         <div className="container-form">
            <h1>Encontre um perfil Github</h1>
            <input type="text" />
            <button>buscar</button>
         </div>
         <Outlet />
        </>
    )
}