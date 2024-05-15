import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
        <Link to="/">
          <h1 className="site-name">MeuSite</h1>
        </Link>
      </div>
      <nav className="navbar">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "menu-item menu-active" : "menu-item"
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/promotion"
          className={({ isActive }) =>
            isActive ? "menu-item menu-active" : "menu-item"
          }
        >
          Promoção
        </NavLink>
        <NavLink
          to="/subscribe"
          className={({ isActive }) =>
            isActive ? "menu-item menu-active" : "menu-item"
          }
        >
          Participar
        </NavLink>
      </nav>
    </header>
  );
}
