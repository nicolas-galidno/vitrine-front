import { useState } from "react";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Explorar from "./pages/explorar/explorar";
import Empresa from "./pages/empresa/empresa";
import PerfilEmpresa from "./pages/perfilEmpresa/perfilEmpresa";

function App() {
  const [pagina, setPagina] = useState("home");
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);

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
        perfilEmpresa={(empresa) => {
          setEmpresaSelecionada(empresa);
          setPagina("perfilEmpresa");
        }}
      />
    );
  }

  if (pagina === "empresa") {
    return (
      <Empresa
        inicio={() => setPagina("home")}
      />
    );
  }

  if (pagina === "perfilEmpresa") {
    return (
      <PerfilEmpresa
        voltar={() => setPagina("explorar")}
        empresa={empresaSelecionada}
      />
    );
  }

  return (
    <Home
      entrar={() => setPagina("login")}
      registrar={() => setPagina("cadastro")}
      explorar={() => setPagina("explorar")}
      empresa={() => setPagina("empresa")}
    />
  );
}

export default App;