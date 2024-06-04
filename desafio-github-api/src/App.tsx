
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientApp from "./routes/ClientApp";
import Form from "./routes/ClientApp/Form";
import Resposta from "./routes/ClientApp/Form/Resposta";
import Inicio from "./routes/ClientApp/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientApp />}>
          <Route index element={<Inicio/>}/>
          <Route path="encontrar" element={<Form />}>
            <Route path="resultado" element={<Resposta/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
