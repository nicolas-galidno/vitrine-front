import { useState } from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Explorar from "./pages/explorar/explorar";
import Empresa from "./pages/empresa/empresa";
import PerfilEmpresa from "./pages/perfilEmpresa/perfilEmpresa";
import Favoritos from "./pages/favoritos/favoritos";
import Conta from "./pages/conta/conta";

function App() {
  const [pagina, setPagina] = useState("home");
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [tipoConta, setTipoConta] = useState("cliente");
  const [emailUsuario, setEmailUsuario] = useState("");

  const abrirPerfil = (empresa) => {
    setEmpresaSelecionada(empresa);
    setPagina("perfilEmpresa");
  };
  const alternarFavorito = (empresa) => {
    const id = empresa?.id ?? empresa?.nome ?? empresa;
    setFavoritos((atuais) => atuais.some((item) => (item?.id ?? item?.nome ?? item) === id)
      ? atuais.filter((item) => (item?.id ?? item?.nome ?? item) !== id)
      : [...atuais, empresa]);
  };
  const navegacao = {
    inicio: () => setPagina("home"),
    explorar: () => setPagina("explorar"),
    favoritos: () => setPagina("favoritos"),
    usuario: () => setPagina("conta"),
    painel: () => setPagina("empresa"),
    login: () => setPagina("login"),
    cadastro: () => setPagina("cadastro"),
  };

  if (pagina === "login") return <Login voltar={navegacao.inicio} cadastro={navegacao.cadastro} aoEntrar={(email) => { setEmailUsuario(email); setPagina("conta"); }} />;
  if (pagina === "cadastro") return <Cadastro voltar={navegacao.inicio} login={navegacao.login} aoCriar={(tipo, email) => { setTipoConta(tipo); setEmailUsuario(email); setPagina(tipo === "empresa" ? "empresa" : "conta"); }} />;
  if (pagina === "explorar") return <Explorar {...navegacao} perfilEmpresa={abrirPerfil} favoritosLista={favoritos} alternarFavorito={alternarFavorito} />;
  if (pagina === "perfilEmpresa") return <PerfilEmpresa {...navegacao} voltar={navegacao.explorar} empresa={empresaSelecionada} favoritos={favoritos} alternarFavorito={alternarFavorito} />;
  if (pagina === "empresa") return <Empresa {...navegacao} />;
  if (pagina === "favoritos") return <Favoritos {...navegacao} favoritos={favoritos} abrirPerfil={abrirPerfil} alternarFavorito={alternarFavorito} />;
  if (pagina === "conta") return <Conta {...navegacao} email={emailUsuario} tipoConta={tipoConta} />;

  return <Home entrar={navegacao.login} registrar={navegacao.cadastro} explorar={navegacao.explorar} empresa={navegacao.painel} favoritos={navegacao.favoritos} usuario={navegacao.usuario} />;
}
export default App;
