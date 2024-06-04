import { Outlet } from "react-router-dom";

export default function Form() {
    return (
        <>
         <div className="container">
            <h1>Encontre um perfil Github</h1>
            <input type="text" />
            <button></button>
         </div>
         <Outlet />
        </>
    )
}