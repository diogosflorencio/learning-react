import "./styles.css";
import CarImg from "../../assets/car-card 1.png";
import Button from "../Button";

export default function CatalogCard() {
  return (
    <div className="ct-card">
      <img src={CarImg} alt="" />
      <h3>Audi Supra TT</h3>
      <p>
        Lorem ipsum dolor sit amet c onsectetur adi adipis
      </p>
      <Button />
    </div>
  );
}
