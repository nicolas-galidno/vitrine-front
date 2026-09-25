import "./empresa.css";

function Empresa({ inicio }) {
  return (
    <div className="empresa-page">

      <nav className="empresa-navbar">
        <div className="empresa-logo">Vitrine</div>

        <div className="empresa-nav-links">
          <button onClick={inicio}>Início</button>
          <button>Explorar</button>
          <button>Favoritos</button>
          <button>Usuário</button>
        </div>
      </nav>

      <main className="empresa-content">

        <h1>PAINEL DA EMPRESA</h1>

        <p className="empresa-subtitle">
          Gerencie sua empresa e seus produtos.
        </p>

        <section className="empresa-header">
          <div>
            <h2>Minha Empresa</h2>
            <p>Gerencie as informações do seu estabelecimento.</p>
          </div>

          <span className="premium-badge">PLANO PREMIUM</span>
        </section>

        <div className="empresa-menu">

          <button className="empresa-menu-item active">
            <strong>Visão Geral</strong>
            <span>Visualize as principais informações da empresa.</span>
          </button>

          <button className="empresa-menu-item">
            <strong>Perfil Empresarial</strong>
            <span>Edite as informações do seu estabelecimento.</span>
          </button>

          <button className="empresa-menu-item">
            <strong>Meus Produtos</strong>
            <span>Adicione e gerencie produtos e serviços.</span>
          </button>

          <button className="empresa-menu-item">
            <strong>Avaliações</strong>
            <span>Visualize as avaliações dos clientes.</span>
          </button>

          <button className="empresa-menu-item">
            <strong>Plano Premium</strong>
            <span>Confira os recursos disponíveis para sua empresa.</span>
          </button>

          <button className="empresa-menu-item">
            <strong>Configurações</strong>
            <span>Configure sua conta e preferências.</span>
          </button>

        </div>

        <section className="produto-section">

          <div className="section-title">
            <div>
              <h2>Meus Produtos</h2>
              <p>Produtos e serviços publicados no catálogo.</p>
            </div>

            <button className="add-product">
              + Adicionar produto
            </button>
          </div>

          <div className="produto-form">

            <div className="form-field">
              <label>Nome do produto ou serviço</label>
              <input type="text" placeholder="Digite o nome" />
            </div>

            <div className="form-field">
              <label>Preço</label>
              <input type="text" placeholder="R$ 0,00" />
            </div>

            <div className="form-field">
              <label>Categoria</label>
              <select>
                <option>Selecione uma categoria</option>
                <option>Serviços Técnicos</option>
                <option>Vestuário & Moda</option>
                <option>Beleza & Estética</option>
                <option>Alimentação</option>
              </select>
            </div>

            <div className="form-field full">
              <label>Descrição detalhada</label>
              <textarea
                placeholder="Descreva seu produto ou serviço"
              ></textarea>
            </div>

            <div className="form-field">
              <label>Foto</label>
              <input type="file" />
            </div>

            <button className="publish-button">
              Publicar Item no Catálogo
            </button>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Empresa;