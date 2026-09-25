import "./explorar.css";

function Explorar({ inicio }) {
    return (
        <main className="explorar">

            <nav className="explorar-navbar">

                <div className="explorar-logo">
                    Vitrine
                </div>

                <div className="explorar-menu">

                    <button onClick={inicio}>
                        Início
                    </button>

                    <button>
                        Explorar
                    </button>

                    <button>
                        Favoritos
                    </button>

                    <button>
                        Usuário
                    </button>

                </div>

            </nav>


            <section className="explorar-content">

                <div className="explorar-header">

                    <h1>
                        Encontre estabelecimentos
                        <br />
                        e serviços locais
                    </h1>

                    <p>
                        Encontre produtos, serviços e estabelecimentos
                        próximos de você.
                    </p>

                </div>


                <div className="pesquisa">

                    <input
                        type="text"
                        placeholder="O que você está procurando?"
                    />

                    <button>
                        Pesquisar
                    </button>

                </div>


                <section className="categorias">

                    <h2>
                        Categorias
                    </h2>

                    <div className="categorias-lista">

                        <button>
                            Serviços Técnicos
                        </button>

                        <button>
                            Vestuário & Moda
                        </button>

                        <button>
                            Beleza & Estética
                        </button>

                        <button>
                            Alimentação
                        </button>

                    </div>

                </section>


                <section className="destaques">

                    <h2>
                        Estabelecimentos em destaque
                    </h2>

                    <div className="destaques-lista">

                        <div className="estabelecimento">
                            <h3>
                                Estabelecimento 1
                            </h3>

                            <p>
                                Descrição do estabelecimento.
                            </p>
                        </div>

                        <div className="estabelecimento">
                            <h3>
                                Estabelecimento 2
                            </h3>

                            <p>
                                Descrição do estabelecimento.
                            </p>
                        </div>

                        <div className="estabelecimento">
                            <h3>
                                Estabelecimento 3
                            </h3>

                            <p>
                                Descrição do estabelecimento.
                            </p>
                        </div>

                    </div>

                </section>

            </section>

        </main>
    );
}

export default Explorar;