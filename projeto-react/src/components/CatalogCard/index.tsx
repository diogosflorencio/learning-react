import { Link } from "react-router-dom";
import { productCatalogDTO } from "../../routes/models/productCatalog";
import "./styles.css";

type Props = {
  productParam: productCatalogDTO;
};

export default function CatalogCard({ productParam }: Props) {
  return (
    
      <Link to={`/product-details/${productParam.id}`}>
        <div className="dsc-card">
          <div className="dsc-catalog-card-top dsc-line-bottom">
            <img src={productParam.imgUrl} alt="Computer" />
          </div>
          <div className="dsc-catalog-card-bottom">
            <h3>{productParam.price}</h3>
            <h4>{productParam.name}</h4>
          </div>
        </div>
      </Link>
    
  );
}
