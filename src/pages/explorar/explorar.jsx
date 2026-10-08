import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import { nomesCategorias } from "../../data/categorias";
import "./explorar.css";
const categorias = ["Todas", ...nomesCategorias];
function Explorar({ inicio, perfilEmpresa, favoritosLista = [], alternarFavorito, favoritos, usuario }) {
  const [empresas, setEmpresas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tentativa, setTentativa] = useState(0);
  useEffect(() => {
    let ativo = true;
    setCarregando(true); setErro("");
    api.get("/empresas").then((response) => {
      if (!ativo) return;
      const dados = Array.isArray(response.data) ? response.data : [];
      setEmpresas(dados.filter((empresa) => empresa.codStatus !== false));
    }).catch((error) => {
      console.error("Erro ao carregar empresas:", error);
      if (ativo) setErro("Não foi possível carregar as empresas. Confira se o back-end e o banco de dados estão funcionando.");
    }).finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, [tentativa]);
  const empresasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-BR");
    return empresas.filter((empresa) => {
      const campos = [empresa.nome, empresa.descricao, empresa.categoria?.nome, empresa.cidade?.nome, empresa.cidade?.estado?.sigla, empresa.logradouro];
      const correspondeTexto = !termo || campos.some((campo) => String(campo || "").toLocaleLowerCase("pt-BR").includes(termo));
      const correspondeCategoria = categoriaAtiva === "Todas" || String(empresa.categoria?.nome || "").toLocaleLowerCase("pt-BR") === categoriaAtiva.toLocaleLowerCase("pt-BR");
      return correspondeTexto && correspondeCategoria;
    });
  }, [empresas, pesquisa, categoriaAtiva]);
  const eFavorita = (empresa) => favoritosLista.some((item) => (item?.id ?? item?.nome ?? item) === (empresa?.id ?? empresa?.nome ?? empresa));
  return <div className="explorar-page"><nav className="explorar-navbar"><button className="brand-mark" onClick={inicio}>Vitrine<span>.</span></button><div className="nav-links"><button onClick={inicio}>Início</button><button aria-current="page">Explorar</button><button onClick={favoritos}>Favoritos</button><button onClick={usuario}>Minha conta</button></div></nav>
    <main className="explorar-content"><span className="eyebrow"><span className="eyebrow-dot"/> DESCUBRA O COMÉRCIO LOCAL</span><h1>Encontre algo<br/><span>perto de você.</span></h1><p className="explorar-description">Conheça empresas, produtos e serviços que fazem parte da sua região.</p>
      <form className="search-area" onSubmit={(e)=>e.preventDefault()}><span>⌕</span><input type="search" placeholder="Pesquise por empresa, serviço ou categoria" aria-label="Pesquisar empresas" value={pesquisa} onChange={(e)=>setPesquisa(e.target.value)}/><button type="submit">Pesquisar <span>↗</span></button></form>
      <section className="category-section"><div className="explorar-section-heading"><div><h2>Explore por categoria</h2><p>Encontre exatamente o que você procura.</p></div></div><div className="categories">{categorias.map((categoria)=><button key={categoria} className={categoriaAtiva===categoria?"category-chip active":"category-chip"} onClick={()=>setCategoriaAtiva(categoria)}>{categoria}</button>)}</div></section>
      <section className="business-section"><div className="explorar-section-heading"><div><h2>Empresas cadastradas</h2><p>{carregando?"Buscando negócios...":`${empresasFiltradas.length} ${empresasFiltradas.length===1?"resultado encontrado":"resultados encontrados"}`}</p></div><button className="refresh-button" onClick={()=>setTentativa((n)=>n+1)}>↻ Atualizar</button></div>
        {carregando&&<div className="explorar-state"><span className="loading-dot"/><p>Carregando empresas...</p></div>}
        {!carregando&&erro&&<div className="explorar-state"><span>!</span><h3>Não conseguimos carregar os negócios</h3><p>{erro}</p><button className="button-outline" onClick={()=>setTentativa((n)=>n+1)}>Tentar novamente</button></div>}
        {!carregando&&!erro&&empresasFiltradas.length===0&&<div className="explorar-state"><span>⌕</span><h3>{empresas.length===0?"Ainda não há empresas cadastradas":"Nenhum resultado por aqui"}</h3><p>{empresas.length===0?"Quando empresas forem cadastradas, elas aparecerão nesta área.":"Tente outro termo de busca ou escolha uma categoria diferente."}</p>{(pesquisa||categoriaAtiva!=="Todas")&&<button className="button-outline" onClick={()=>{setPesquisa("");setCategoriaAtiva("Todas");}}>Limpar filtros</button>}</div>}
        <div className="business-grid">{empresasFiltradas.map((empresa)=><article className="business-card" key={empresa.id??empresa.nome}><div className="business-image"><span>V.</span><button className={eFavorita(empresa)?"business-favorite saved":"business-favorite"} onClick={()=>alternarFavorito?.(empresa)} aria-label={eFavorita(empresa)?"Remover dos favoritos":"Adicionar aos favoritos"}>{eFavorita(empresa)?"♥":"♡"}</button></div><div className="business-info"><span className="business-category">{empresa.categoria?.nome||"Negócio local"}{empresa.cidade?.nome?` · ${empresa.cidade.nome}`:""}{empresa.cidade?.estado?.sigla?`, ${empresa.cidade.estado.sigla}`:""}</span><h3>{empresa.nome}</h3><p>{empresa.descricao||"Conheça os produtos e serviços oferecidos por esta empresa."}</p><button className="business-view" onClick={()=>perfilEmpresa(empresa)}>Ver perfil e catálogo <span>↗</span></button></div></article>)}</div>
      </section><div className="explorar-entrepreneur"><div><span className="eyebrow">TEM UM NEGÓCIO?</span><h2>Seu próximo cliente<br/>pode estar por aqui.</h2><p>Crie seu espaço no Vitrine e apresente o que você faz.</p></div><button className="button-light" onClick={usuario}>Acessar minha conta ↗</button></div>
    </main></div>;
}
export default Explorar;
