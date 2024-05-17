import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import SubHeader from "./components/SubHeader";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} >
          <Route index element={<HomeBody />}/>
          <Route path="home" element={<HomeBody />}/>
          <Route path="produtos" element={<Products />}>
            <Route index element={<SubHeader/>}/>
          </Route>
          <Route path="sobre" element={<About />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
