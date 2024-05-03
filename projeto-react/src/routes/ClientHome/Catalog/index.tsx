import HeaderClient from "../../../components/HeaderClient";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import "./styles.css";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { productCatalogDTO } from "../../models/productCatalog";

const item: productCatalogDTO = {
  id: 1,
  itens: [
    {
      name: 'computador',
      price: 5000,
    },
    {
      name: 'NoteBook',
      price: 3000,
    },
    {
      name: 'BookNote',
      price: 8000,
    },
    {
      name: 'Computa a dor',
      price: 301,
    },
    {
      name: 'Computa',
      price: 90000,
    },
    {
      name: 'PCzin',
      price: 40000,
    },
  ]


};

export default function Catalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            item.itens.map( i => {
              return  <CatalogCard key={item.id}  item={i} />
            })
          }
       
           
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
