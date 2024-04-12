import './styles.css';
import CarImg from '../../assets/car-card 1.png'

export default function CatalogCard() {
    return (
        <>
            <div>
                <img src={CarImg} alt="" />
                <h2>Audi Supra TT</h2>
                <p>Lorem ipsum dolor sit amet c
                onsectetur adipisit amet consectetur adipis</p>
                <button>COMPRAR</button>
            </div>
        </>
    );
}