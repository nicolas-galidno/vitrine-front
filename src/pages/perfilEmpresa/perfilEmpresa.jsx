import { useEffect, useState } from "react";
import api from "../../services/api";
import "./perfilEmpresa.css";
function PerfilEmpresa({ voltar, explorar, inicio, favoritos = [], alternarFavorito, empresa }) {
  const [mensagem, setMensagem] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [carregandoProdutos, setCarregandoProdutos] = useState(true);
  useEffect(() => {
    let ativo = true;
    api.get("/produto")
      .then(({ data }) => { if (ativo) setProdutos(Array.isArray(data) ? data : []); })
      .catch((error) => { console.error("Erro ao carregar catálogo:", error); if (ativo) setMensagem("Não foi possível carregar os produtos do catálogo."); })
      .finally(() => { if (ativo) setCarregandoProdutos(false); });
    return () => { ativo = false; };
  }, []);
  const nome = empresa?.nome || (typeof empresa === "string" ? empresa : "Empresa local");
  const categoria = empresa?.categoria?.nome || "Categoria não informada";
  const cidade = empresa?.cidade?.nome || "Localização não informada";
  const estado = empresa?.cidade?.estado?.sigla ? `, ${empresa.cidade.estado.sigla}` : "";
  const logradouro = empresa?.logradouro;
  const telefones = (Array.isArray(empresa?.telefones) ? empresa.telefones : []).map((t) => t?.numero ?? t).filter(Boolean);
  const descricao = empresa?.descricao || "Conheça os produtos e serviços oferecidos por esta empresa. Entre em contato para saber mais sobre o que ela oferece.";
  const favorita = favoritos.some((item)=>(item?.id??item?.nome??item)===(empresa?.id??empresa?.nome??empresa));
  return <div className="perfil-page"><nav className="perfil-navbar"><button className="brand-mark" onClick={inicio}>Vitrine<span>.</span></button><div className="perfil-nav-links"><button onClick={inicio}>Início</button><button onClick={explorar}>Explorar</button><button onClick={voltar}>Resultados</button></div></nav>
    <main className="perfil-content"><button className="profile-back" onClick={voltar}>← Voltar para empresas</button><section className="empresa-profile"><div className="empresa-cover"><span>V.</span><div className="cover-label">NEGÓCIO LOCAL</div></div><div className="empresa-profile-info"><div><span className="business-category">{categoria} · {cidade}{estado}</span><h1>{nome}</h1><p>{descricao}</p></div><button className={favorita?"favorite-button is-favorite":"favorite-button"} onClick={()=>{alternarFavorito?.(empresa||{nome});setMensagem(favorita?"Empresa removida dos favoritos.":"Empresa adicionada aos favoritos.");}}>{favorita?"♥ Favoritado":"♡ Favoritar"}</button></div><div className="empresa-meta"><span><b>⌖</b> {logradouro ? `${logradouro} · ` : ""}{cidade}{estado}</span>{telefones.length > 0 && <span><b>✆</b> {telefones.join(" · ")}</span>}<span><b>☆</b> Avaliações ainda não disponíveis</span><span><b>▤</b> Catálogo da empresa</span></div></section>{mensagem&&<p className="profile-message" role="status">{mensagem}</p>}
      <section className="catalog-section"><div className="profile-section-heading"><div><h2>Produtos e serviços</h2><p>Produtos cadastrados na plataforma. O back-end atual ainda não relaciona cada produto a uma empresa.</p></div><span className="profile-count">CATÁLOGO</span></div>{carregandoProdutos ? <div className="profile-empty"><span>▤</span><h3>Carregando catálogo...</h3><p>Buscando produtos no servidor.</p></div> : produtos.length === 0 ? <div className="profile-empty"><span>▤</span><h3>Nenhum produto cadastrado</h3><p>Quando houver produtos cadastrados, eles aparecerão nesta área.</p></div> : <div className="public-product-grid">{produtos.map((item) => <article className="public-product-card" key={item.id}><span>▤</span><div><h3>{item.nome}</h3><p>{item.descricao || "Consulte a empresa para mais informações."}</p></div><strong>{Number(item.preco || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong></article>)}</div>}</section>
      <section className="reviews-section"><div className="profile-section-heading"><div><h2>Avaliações</h2><p>As experiências ajudam outras pessoas a descobrir bons negócios.</p></div></div><div className="profile-empty review-empty"><span>☆</span><h3>Avaliações em breve</h3><p>O cadastro e a consulta de avaliações ainda precisam ser integrados ao back-end. Conforme as regras do projeto, será necessário entrar em uma conta para avaliar uma empresa.</p><button className="button-outline" onClick={()=>setMensagem("A função de avaliação será habilitada após a integração com a API de usuários e avaliações.")}>Como avaliar?</button></div></section>
      <div className="profile-bottom-cta"><div><h2>Gostou deste negócio?</h2><p>Guarde o perfil para encontrar de novo quando quiser.</p></div><button className="button-light" onClick={()=>{alternarFavorito?.(empresa||{nome});setMensagem(favorita?"Empresa removida dos favoritos.":"Empresa adicionada aos favoritos.");}}>{favorita?"♥ Salvo nos favoritos":"♡ Adicionar aos favoritos"}</button></div>
    </main></div>;
}
export default PerfilEmpresa;
