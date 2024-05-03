//import ProductDetails from './routes/ProductDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="/" element={<Catalog/>}/>
          <Route path="product-details" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
