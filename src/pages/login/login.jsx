import "./login.css";

function Login({ voltar, cadastro }) {
  return (
    <main className="login">

      <div className="login-container">

        <header className="login-header">
          <div className="login-logo">
            Vitrine
          </div>

          <h1>
            Bem-vindo de volta!
          </h1>

          <p>
            Entre na sua conta para continuar.
          </p>
        </header>


        <form className="login-form">

          <div className="input-group">

            <label htmlFor="email">
              E-mail
            </label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />

          </div>


          <div className="input-group">

            <label htmlFor="senha">
              Senha
            </label>

            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
            />

          </div>


          <button
            type="submit"
            className="login-submit"
          >
            Entrar
          </button>

        </form>


        <div className="login-register">
          <span>
            Ainda não possui uma conta?
          </span>

          <button onClick={cadastro}>
            Criar agora
          </button>
        </div>


        <button
          className="back-button"
          onClick={voltar}
        >
          ← Voltar
        </button>

      </div>

    </main>
  );
}

export default Login;