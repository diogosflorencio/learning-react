import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Inicio() {
  return (
    <>
      <div className="container-home">
        <h1>Desafio Github API</h1>
        <p>DevSuperior - Escola de programação</p>
        <Link to="/encontrar">
          <button>Começar</button>
        </Link>
      </div>
    </>
  );
}
