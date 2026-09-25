import { useState } from "react";
import "./cadastro.css";


function Cadastro({ voltar, login }) {
    const [tipoConta, setTipoConta] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function criarConta(e) {
        e.preventDefault();

        if (email === "") {
            alert("Digite seu e-mail.");
            return;
        }

        if (senha === "") {
            alert("Digite sua senha.");
            return;
        }

        if (confirmarSenha === "") {
            alert("Confirme sua senha.");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não são iguais.");
            return;
        }

        if (tipoConta === "") {
            alert("Selecione o tipo de conta.");
            return;
        }

        alert("Cadastro preenchido corretamente!");
    }

    return (
        <main className="cadastro">
            <div className="cadastro-container">

                <header className="cadastro-header">
                    <div className="cadastro-logo">
                        Vitrine
                    </div>

                    <h1>
                        Seja bem-vindo!
                    </h1>

                    <p>
                        Crie sua conta para começar.
                    </p>
                </header>


                <form
                    className="cadastro-form"
                    onSubmit={criarConta}
                >

                    <div className="input-group">
                        <label htmlFor="email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>


                    <div className="input-group">
                        <label htmlFor="confirmar-senha">
                            Confirmar senha
                        </label>

                        <input
                            type="password"
                            id="confirmar-senha"
                            placeholder="Digite sua senha novamente"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>


                    <div className="tipo-conta">

                        <p>
                            Tipo de conta
                        </p>

                        <div className="tipo-conta-botoes">

                            <button
                                type="button"
                                className={`tipo-conta-button ${tipoConta === "empreendedor" ? "selecionado" : ""
                                    }`}
                                onClick={() => setTipoConta("empreendedor")}
                            >
                                Sou empreendedor
                            </button>

                            <button
                                type="button"
                                className={`tipo-conta-button ${tipoConta === "cliente" ? "selecionado" : ""
                                    }`}
                                onClick={() => setTipoConta("cliente")}
                            >
                                Sou cliente
                            </button>

                        </div>

                    </div>


                    <button
                        type="submit"
                        className="cadastro-submit"
                    >
                        Criar conta
                    </button>

                </form>


                <div className="cadastro-login">

                    <span>
                        Já possui uma conta?
                    </span>

                    <button onClick={login}>
                        Entrar
                    </button>

                </div>

            </div>
        </main>
    );
}

export default Cadastro;