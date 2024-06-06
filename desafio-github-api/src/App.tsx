
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientApp from "./routes/ClientApp";
import Form from "./routes/ClientApp/Form";
import Resposta from "./routes/ClientApp/Form/RespostaErro";
import Inicio from "./routes/ClientApp/Inicio";
import RespostaErro from "./routes/ClientApp/Form/RespostaErro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientApp />}>
          <Route index element={<Inicio/>}/>
          <Route path="encontrar" element={<Form />}>
            <Route path="erro" element={<RespostaErro/>}/>
            <Route path="resposta" element={<Resposta/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
