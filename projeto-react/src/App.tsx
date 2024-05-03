//import ProductDetails from './routes/ProductDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
