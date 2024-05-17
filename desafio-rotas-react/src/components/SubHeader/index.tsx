import "./styles.css";
import iconeCasa from "../../assets/image.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SubHeader() {
  return (
    <header>
      <div className="container-container">
        <nav className="container">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "ativo item " : "item")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) => (isActive ? "ativo item " : "item")}
          >
            Produtos
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) => (isActive ? "ativo item " : "item")}
          >
            Sobre nós
          </NavLink>
        </nav>
        <div className="container-image">
          <Link to="/"><img className="icone-casa" src={iconeCasa} alt="botão home" /></Link>
        </div>
      </div>
    </header>
  );
}
