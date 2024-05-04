import ComputerImg from '../../assets/computer.png';
import { productCatalogDTO } from '../../routes/models/productCatalog';
import './styles.css';

type Props = {
  product: productCatalogDTO;
}

export default function CatalogCard({product}: Props) {
  return (
    <>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={ComputerImg} alt="Computer" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>{product.price}</h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </>
  );
}
