import CatalogCard from "../../components/CatalogCard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

export default function Catalog() {
  return (
    <>
      <Header />
      <div>
        <SearchBar />
        <div>
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
