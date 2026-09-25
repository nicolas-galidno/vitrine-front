import "./explorar.css";

function Explorar({ inicio, perfilEmpresa }) {
  return (
    <div className="explorar-page">

      <nav className="explorar-navbar">
        <div className="logo">Vitrine</div>

        <div className="nav-links">
          <button onClick={inicio}>Início</button>
          <button>Explorar</button>
          <button>Favoritos</button>
          <button>Usuário</button>
        </div>
      </nav>

      <main className="explorar-content">

        <h1>Encontre estabelecimentos<br />e serviços locais</h1>

        <p className="explorar-description">
          Encontre empresas, produtos e serviços próximos de você.
        </p>

        <div className="search-area">
          <input
            type="text"
            placeholder="Pesquise por empresa, serviço ou categoria"
          />

          <button>Pesquisar</button>
        </div>

        <h2>Categorias</h2>

        <div className="categories">
          <button>Serviços Técnicos</button>
          <button>Vestuário & Moda</button>
          <button>Beleza & Estética</button>
          <button>Alimentação</button>
        </div>

        <h2>Empresas em destaque</h2>

        <div className="business-grid">

          <div className="business-card">
            <div className="business-image">
              Foto da empresa
            </div>

            <div className="business-info">
              <h3>Freddy Fazbear Pizzaria</h3>
              <span>Pizzaria • Barueri, SP</span>

              <p>
                Uma pizzaria local com produtos e serviços para seus clientes.
              </p>

              <div className="business-rating">
                ★ 3.45 (67 avaliações)
              </div>

              <button onClick={() => perfilEmpresa("freddy")}>
                Ver perfil e catálogo
              </button>
            </div>
          </div>

          <div className="business-card">
            <div className="business-image">
              Foto da empresa
            </div>

            <div className="business-info">
              <h3>The Monica Club</h3>
              <span>Pizzaria • São Paulo, SP</span>

              <p>
                Conheça os produtos e serviços oferecidos por esta empresa.
              </p>

              <div className="business-rating">
                ★ 4.3 (401 avaliações)
              </div>

              <button onClick={() => perfilEmpresa("monica")}>
                Ver perfil e catálogo
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Explorar;