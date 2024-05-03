//import ProductDetails from './routes/ProductDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog";
import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />}>
          <Route path="product-details" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
