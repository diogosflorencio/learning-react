import "./styles.css";
import HeaderClient from "../../../components/HeaderClient";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import Button from "../../../components/Button";
import ButtonInvertido from "../../../components/ButtonInvertido";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";

export default function ProductDetails() {

  const params = useParams();
  const product = productService.findById(Number(params.productId))
  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product &&
            <ProductDetailsCard product={product}/>
          }
          <div className="dsc-btn-page-container">
            
            <Button name={'Comprar'}/>
            <ButtonInvertido name={'Início'}/>
          </div>
        </section>
      </main>
    </>
  );
}
