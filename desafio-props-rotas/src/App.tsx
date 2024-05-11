import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Promotion from "./routes/Home/HomeBody";
import HomeBody from "./routes/Home/Promotion";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="promotions" element={<Promotion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
