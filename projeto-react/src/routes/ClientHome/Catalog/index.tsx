import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import "./styles.css";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from '../../../services/product-service';
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import axios from "axios";



export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/products?size=12")
    .then(response => {
      setProducts(response.data.content)
    })
  }, [])
  return (
    <>
    
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
             products.map(product => <CatalogCard key={product.id} productParam={product} />)
          }
       
           
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
