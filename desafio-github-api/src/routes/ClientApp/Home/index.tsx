import { Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import "./styles.css"

export default function Home() {
    return (
        <>
         <div className="container-home">
             <h1>Desafio Github API</h1>
             <p>DevSuperior - Escola de programação</p>
             <button>Começar</button>
         </div>
        </>
    )
}