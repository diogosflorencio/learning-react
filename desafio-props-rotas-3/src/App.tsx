import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Subscribe from "./routes/Subscribe";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/home"/>} />
            <Route path="home" element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="subscribe" element={<Subscribe/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App
