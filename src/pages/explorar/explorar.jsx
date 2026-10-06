import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import "./explorar.css";

function Explorar({ inicio, perfilEmpresa }) {
  const [empresas, setEmpresas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    let ativo = true;

    api.get("/empresas")
      .then((response) => {
        if (!ativo) return;
        const dados = Array.isArray(response.data) ? response.data : [];
        setEmpresas(dados.filter((empresa) => empresa.codStatus !== false));
        setErro("");
      })
      .catch((error) => {
        console.error("Erro ao carregar empresas:", error);
        if (ativo) setErro("Não foi possível carregar as empresas. Confira se o back-end e o banco de dados estão funcionando.");
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => { ativo = false; };
  }, []);

  const empresasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-BR");
    if (!termo) return empresas;

    return empresas.filter((empresa) => {
      const campos = [
        empresa.nome,
        empresa.descricao,
        empresa.categoria?.nome,
        empresa.cidade?.nome,
        empresa.cidade?.estado?.sigla,
      ];
      return campos.some((campo) => String(campo || "").toLocaleLowerCase("pt-BR").includes(termo));
    });
  }, [empresas, pesquisa]);

  return (
    <div className="explorar-page">
      <nav className="explorar-navbar">
        <div className="logo">Vitrine</div>
        <div className="nav-links">
          <button onClick={inicio}>Início</button>
          <button type="button" aria-current="page">Explorar</button>
          <button type="button" disabled title="Funcionalidade ainda não conectada ao back-end">Favoritos</button>
          <button type="button" disabled title="Funcionalidade ainda não conectada ao back-end">Usuário</button>
        </div>
      </nav>

      <main className="explorar-content">
        <h1>Encontre estabelecimentos<br />e serviços locais</h1>
        <p className="explorar-description">Encontre empresas, produtos e serviços próximos de você.</p>

        <form className="search-area" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Pesquise por empresa, serviço ou categoria"
            aria-label="Pesquisar empresas"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>

        <h2>Empresas cadastradas</h2>

        {carregando && <p role="status">Carregando empresas...</p>}
        {!carregando && erro && <p role="alert">{erro}</p>}
        {!carregando && !erro && empresasFiltradas.length === 0 && (
          <p>{empresas.length === 0 ? "Ainda não há empresas cadastradas." : "Nenhuma empresa corresponde à sua pesquisa."}</p>
        )}

        <div className="business-grid">
          {empresasFiltradas.map((empresa) => (
            <article className="business-card" key={empresa.id}>
              <div className="business-image">Foto da empresa</div>
              <div className="business-info">
                <h3>{empresa.nome}</h3>
                <span>
                  {empresa.categoria?.nome || "Categoria não informada"}
                  {empresa.cidade?.nome ? ` • ${empresa.cidade.nome}` : ""}
                  {empresa.cidade?.estado?.sigla ? `, ${empresa.cidade.estado.sigla}` : ""}
                </span>
                <p>{empresa.descricao || "Conheça os produtos e serviços oferecidos por esta empresa."}</p>
                <button type="button" onClick={() => perfilEmpresa(empresa)}>Ver perfil</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Explorar;
