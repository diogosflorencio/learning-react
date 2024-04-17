import './styles.css';
import CarImg from '../assets/car-card 1.png';

export default function Card() {
    return (
        <>
            <div className='dc-container-card'>
                <img src={CarImg} alt="" />
                <h3>Lorem ipsum dolor</h3>
            </div>
        </>
    );
}