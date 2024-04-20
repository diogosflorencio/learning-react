import ComputerImg from '../../assets/computer.png';
import { productCatalogDTO } from '../../routes/models/productCatalog';
import './styles.css';

type Props = {
  item: productCatalogDTO;
}

export default function CatalogCard({item}: Props) {
  return (
    <>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={ComputerImg} alt="Computer" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>{item.price}</h3>
          <h4>{item.name}</h4>
        </div>
      </div>
    </>
  );
}
