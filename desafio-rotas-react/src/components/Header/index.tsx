import "./styles.css";
import iconeCasa from "../../assets/image.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <>
            <div className="container-container">
                <div className="container">
                    <NavLink className={({ isActive }) to="/">
                        Início
                    </NavLink>
                    <div className="item">Produtos</div>
                    <div className="item">Sobre nós</div>
                </div>
                <div className="container-image">
                    <img className="icone-casa" src={iconeCasa} alt="botão home" />
                </div>
            </div>
        </>
    );
}