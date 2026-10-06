import { useState } from "react";
import "./login.css";

function Login({ voltar, cadastro, aoEntrar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  function enviar(e) {
    e.preventDefault();
    if (!email.trim() || !senha) { setMensagem("Preencha seu e-mail e sua senha para continuar."); return; }
    setMensagem("A tela está pronta, mas o login ainda precisa ser conectado ao back-end. Nenhuma sessão foi criada.");
  }
  return <main className="login-page">
    <nav className="auth-navbar"><button className="brand-mark" onClick={voltar}>Vitrine<span>.</span></button><button className="auth-back" onClick={voltar}>← Voltar ao início</button></nav>
    <section className="auth-layout"><div className="auth-aside"><span className="eyebrow"><span className="eyebrow-dot"/> SUA VITRINE COMEÇA AQUI</span><h1>Bom ter você<br/><span>de volta.</span></h1><p>Acesse sua conta para continuar descobrindo negócios locais ou cuidar do seu próprio espaço no Vitrine.</p><div className="auth-aside-note"><span>✦</span><div><strong>Um lugar para crescer</strong><small>Conexões reais entre pessoas e negócios.</small></div></div></div>
      <div className="auth-card"><div className="auth-card-heading"><span className="auth-symbol">V.</span><div><h2>Bem-vindo de volta!</h2><p>Entre na sua conta para continuar.</p></div></div><form className="auth-form" onSubmit={enviar}><label>E-mail<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="voce@exemplo.com" autoComplete="email" required/></label><label>Senha<input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} placeholder="Digite sua senha" autoComplete="current-password" required/></label><button className="button-light auth-submit" type="submit">Entrar <span>↗</span></button>{mensagem && <p className="form-message" role="status">{mensagem}</p>}</form><div className="auth-switch">Ainda não possui uma conta? <button onClick={cadastro}>Criar agora</button></div><p className="auth-footnote">A autenticação será ativada quando a API de usuários estiver pronta.</p></div>
    </section>
  </main>;
}
export default Login;
