import "./home.css";

function Home({ entrar, registrar, explorar, empresa }) {
  return (
    <main className="home">

      <nav className="navbar">

        <div className="navbar-logo">
          Vitrine
        </div>

        <div className="navbar-buttons">

          <button
            className="navbar-register"
            onClick={registrar}
          >
            Registrar
          </button>

          <button
            className="navbar-login"
            onClick={entrar}
          >
            Login
          </button>

          <button
            className="login-button"
            onClick={empresa}
          >
            Painel da Empresa
          </button>

        </div>

      </nav>

      <section className="home-content">

        <h1>
          Vitrine
        </h1>

        <h2>
          Simples para quem vende,
          <br />
          inteligente para quem procura.
        </h2>

        <div className="home-buttons">

          <button
            className="register-button"
            onClick={registrar}
          >
            Registrar
          </button>

          <button
            className="login-button"
            onClick={entrar}
          >
            Login
          </button>

          <button
            className="login-button"
            onClick={explorar}
          >
            Explorar
          </button>

          <button
            className="login-button"
            onClick={empresa}
          >
            Painel da Empresa
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;