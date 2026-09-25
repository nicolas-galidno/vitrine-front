import "./perfilEmpresa.css";

function PerfilEmpresa({ voltar, empresa }) {

    const dados = {
        freddy: {
            nome: "Freddy Fazbear Pizzaria",
            categoria: "Pizzaria",
            local: "Barueri, SP",
            nota: "3.45",
            avaliacoes: "67 avaliações",
            descricao:
                "Uma pizzaria local com produtos e serviços para seus clientes.",
            produtos: [
                {
                    nome: "Pizza Especial",
                    descricao: "Pizza preparada especialmente pela empresa.",
                    preco: "R$ 45,00"
                },
                {
                    nome: "Pizza Tradicional",
                    descricao: "Pizza tradicional com diferentes opções de sabores.",
                    preco: "R$ 35,00"
                },
                {
                    nome: "Entrega",
                    descricao: "Serviço de entrega disponível para a região.",
                    preco: "A consultar"
                }
            ]
        },

        monica: {
            nome: "The Monica Club",
            categoria: "Pizzaria",
            local: "São Paulo, SP",
            nota: "4.3",
            avaliacoes: "401 avaliações",
            descricao:
                "Conheça os produtos e serviços oferecidos por esta empresa.",
            produtos: [
                {
                    nome: "Pizza da Casa",
                    descricao: "Pizza especial preparada pela empresa.",
                    preco: "R$ 50,00"
                },
                {
                    nome: "Pizza Tradicional",
                    descricao: "Pizza tradicional com diferentes opções de sabores.",
                    preco: "R$ 40,00"
                },
                {
                    nome: "Entrega",
                    descricao: "Serviço de entrega disponível para a região.",
                    preco: "A consultar"
                }
            ]
        }
    };

    const empresaAtual = dados[empresa] || dados.freddy;

    return (
        <div className="perfil-page">

            <nav className="perfil-navbar">
                <div className="perfil-logo">Vitrine</div>

                <div className="perfil-nav-links">
                    <button onClick={voltar}>Início</button>
                    <button>Explorar</button>
                    <button>Favoritos</button>
                    <button>Usuário</button>
                </div>
            </nav>

            <main className="perfil-content">

                <button className="back-button" onClick={voltar}>
                    ← Voltar
                </button>

                <section className="empresa-profile">

                    <div className="empresa-cover">
                        Foto / Banner da empresa
                    </div>

                    <div className="empresa-profile-info">

                        <div>
                            <h1>{empresaAtual.nome}</h1>

                            <p>
                                {empresaAtual.categoria} • {empresaAtual.local}
                            </p>
                        </div>

                        <button className="favorite-button">
                            ♡ Favoritar
                        </button>

                    </div>

                    <p className="empresa-description">
                        {empresaAtual.descricao}
                    </p>

                    <div className="empresa-rating">
                        ★ {empresaAtual.nota}

                        <span>
                            {empresaAtual.avaliacoes}
                        </span>
                    </div>

                </section>

                <section className="catalog-section">

                    <h2>Produtos e Serviços</h2>

                    <div className="catalog-grid">

                        {empresaAtual.produtos.map((produto, index) => (

                            <div className="product-card" key={index}>

                                <div className="product-image">
                                    Foto do produto
                                </div>

                                <div className="product-info">

                                    <h3>
                                        {produto.nome}
                                    </h3>

                                    <p>
                                        {produto.descricao}
                                    </p>

                                    <strong>
                                        {produto.preco}
                                    </strong>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

                <section className="reviews-section">

                    <h2>Avaliações</h2>

                    <div className="review-card">

                        <strong>Cliente Vitrine</strong>

                        <div className="review-stars">
                            ★★★★★
                        </div>

                        <p>
                            Ótimo atendimento e produtos de qualidade.
                        </p>

                    </div>

                    <div className="review-card">

                        <strong>Cliente Vitrine</strong>

                        <div className="review-stars">
                            ★★★★☆
                        </div>

                        <p>
                            Boa experiência e atendimento.
                        </p>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default PerfilEmpresa;