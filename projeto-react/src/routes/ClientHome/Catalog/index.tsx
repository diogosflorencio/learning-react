import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import "./styles.css";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import { CategoryDTO } from "../../models/category";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const objTest : CategoryDTO = {
    id: 8,
    name: "jardinagem"
  }

  useEffect(() => {
    // localStorage.setItem("minhaCategoria", JSON.stringify(objTest))
    const obj = JSON.parse(localStorage.getItem("minhaCategoria") || "")
    console.log(obj.name)

    productService.findAll().then((response) => {
      setProducts(response.data.content);
    });
  }, []);
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {products.map(
              product => <CatalogCard key={product.id} productParam={product} />
              
            )}
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
