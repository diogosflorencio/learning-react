import CatalogCard from "../../components/CatalogCard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import './styles.css';

export default function Catalog() {
  return (
    <>
      <Header />
      <div className="container-app">
        <SearchBar />
        <div className="card-container">
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
    </>
  );
}
