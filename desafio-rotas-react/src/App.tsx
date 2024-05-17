import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import Compt from "./routes/Home/Products/Compt";
import Eletro from "./routes/Home/Products/Eletro";
import Livros from "./routes/Home/Products/Livros";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} >
          <Route index element={<HomeBody />}/>
          <Route path="home" element={<HomeBody />}/>
          <Route path="produtos" element={<Products />}>
            <Route path="compt" element={<Compt/>}/>
            <Route path="eletro" element={<Eletro/>}/>
            <Route path="livros" element={<Livros/>}/>
          </Route>
          <Route path="sobre" element={<About />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
