import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import Button from "../../../components/Button";
import ButtonInvertido from "../../../components/ButtonInvertido";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";

export default function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard product={product} />}
          <div className="dsc-btn-page-container">
            <Button name={"Comprar"} />
            <Link to="/">
              <ButtonInvertido name={"Início"} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
