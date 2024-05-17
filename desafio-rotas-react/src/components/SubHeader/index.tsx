import "./styles.css";
import { NavLink } from "react-router-dom";
export default function SubHeader() {
  return (
    <header>
      <div className="container-container-sub">
        <nav className="container">
          <NavLink
            to="/produtos/compt"
            className={({ isActive }) =>
              isActive ? "ativo item-sub " : "item-sub"
            }
          >
            Computador
          </NavLink>
          <NavLink
            to="/produtos/eletro"
            className={({ isActive }) =>
              isActive ? "ativo item-sub " : "item-sub"
            }
          >
            Eletronicos
          </NavLink>
          <NavLink
            to="/produtos/livros"
            className={({ isActive }) =>
              isActive ? "ativo item-sub " : "item-sub"
            }
          >
            Livros
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
