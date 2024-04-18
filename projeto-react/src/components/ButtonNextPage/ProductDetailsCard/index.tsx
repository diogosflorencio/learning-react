import { ProductDTO } from "../../../routes/models/product";

type Props = {
    product: ProductDTO;
}


export default function ProductDetailsCard({product} : Props) {
  return (
    <>
      <div className="dsc-card dsc-mb20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img src={product.imgUrl} alt="Computador" />
        </div>
        <div className="dsc-product-details-bottom">
          <h3>R$ {product.price}</h3>
          <h4>{product.name}</h4>
          <p>
            {product.description}
          </p>
          <div className="dsc-category-container">
            <div className="dsc-category">Eletrônicos</div>
            <div className="dsc-category">Computadores</div>
          </div>
        </div>
      </div>
    </>
  );
}
