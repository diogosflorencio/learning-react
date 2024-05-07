import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { Link } from "react-router-dom";

type Props = {
  name: string;
};

export default function HeaderClient({ name }: Props) {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/">
            <h1>{name}</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
                <Link to="/cart">
                  <img src={cartIcon} alt="Carrinho de compras" />
                </Link>
              </div>
            </div>
            <Link to="/login">
              <a href="#">Entrar</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
