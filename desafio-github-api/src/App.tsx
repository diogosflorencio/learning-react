
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientApp from "./routes/ClientApp";
import Form from "./routes/ClientApp/Form";
import Resposta from "./routes/ClientApp/Form/Resposta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientApp/>}>
          <Route path="encontrar" element={<Form />}>
            <Route path="resultado" element={<Resposta/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
