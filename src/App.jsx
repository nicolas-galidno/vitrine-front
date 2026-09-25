import { useState } from "react";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Explorar from "./pages/explorar/explorar";

function App() {
  const [pagina, setPagina] = useState("home");

  if (pagina === "login") {
    return (
      <Login
        voltar={() => setPagina("home")}
        cadastro={() => setPagina("cadastro")}
      />
    );
  }

  if (pagina === "cadastro") {
    return (
      <Cadastro
        voltar={() => setPagina("home")}
        login={() => setPagina("login")}
      />
    );
  }

  if (pagina === "explorar") {
    return (
      <Explorar
        inicio={() => setPagina("home")}
      />
    );
  }

  return (
    <Home
      entrar={() => setPagina("login")}
      registrar={() => setPagina("cadastro")}
      explorar={() => setPagina("explorar")}
    />
  );
}

export default App;