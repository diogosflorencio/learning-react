
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientApp from "./routes/ClientApp/Home";
import Form from "./routes/ClientApp/Form";
import Resposta from "./routes/ClientApp/Form/Resposta";
import Home from "./routes/ClientApp/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<ClientApp/>}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home/>}/>
          <Route path="encontrar" element={<Form />}>
            <Route path="resultado" element={<Resposta/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
