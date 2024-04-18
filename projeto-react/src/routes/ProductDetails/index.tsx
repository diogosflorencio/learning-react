import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import { ProductDTO } from "../models/product";
import ProductDetailsCard from "../../components/ButtonNextPage/ProductDetailsCard";

const product: ProductDTO = {
  id: 2,
  name: "note",
  description: "aaaaaaaaaaaaaaaaaaaaa",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/11-small.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletronicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <HeaderClient name={"DSCommerce"} />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">Comprar</div>
            <div className="dsc-btn dsc-btn-white">Início</div>
          </div>
        </section>
      </main>
    </>
  );
}
