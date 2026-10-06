import { useState } from "react";
import "./cadastro.css";

function Cadastro({ voltar, login }) {
  const [tipoConta, setTipoConta] = useState("cliente");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  function criarConta(e) {
    e.preventDefault();
    if (senha.length < 6) { setMensagem("Sua senha precisa ter pelo menos 6 caracteres."); return; }
    if (senha !== confirmarSenha) { setMensagem("As senhas não são iguais. Confira e tente novamente."); return; }
    if (!nome.trim()) { setMensagem("Informe seu nome para continuar."); return; }
    setMensagem("Cadastro validado! A criação real da conta será ativada quando a API de usuários estiver disponível.");
  }
  return <main className="cadastro-page">
    <nav className="auth-navbar"><button className="brand-mark" onClick={voltar}>Vitrine<span>.</span></button><button className="auth-back" onClick={voltar}>← Voltar ao início</button></nav>
    <section className="signup-layout"><div className="signup-intro"><span className="eyebrow"><span className="eyebrow-dot"/> BEM-VINDO AO VITRINE</span><h1>Faça parte<br/>dessa <span>conexão.</span></h1><p>Crie sua conta e encontre novos lugares para conhecer ou dê mais visibilidade ao seu negócio.</p><div className="signup-choice-preview"><div><span>01</span><strong>Sou cliente</strong><small>Encontre e favorite negócios.</small></div><div><span>02</span><strong>Sou empreendedor</strong><small>Apresente sua empresa ao mundo.</small></div></div></div>
      <div className="signup-card"><div className="signup-heading"><span className="auth-symbol">V.</span><div><h2>Crie sua conta</h2><p>É simples começar por aqui.</p></div></div><form className="signup-form" onSubmit={criarConta}>
        <label>Nome completo<input value={nome} onChange={(e)=>setNome(e.target.value)} placeholder="Como podemos te chamar?" autoComplete="name" required/></label>
        <label>E-mail<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="voce@exemplo.com" autoComplete="email" required/></label>
        <div className="signup-fields"><label>Senha<input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} placeholder="Mínimo 6 caracteres" autoComplete="new-password" required minLength={6}/></label><label>Confirmar senha<input type="password" value={confirmarSenha} onChange={(e)=>setConfirmarSenha(e.target.value)} placeholder="Repita a senha" autoComplete="new-password" required/></label></div>
        <fieldset className="account-type"><legend>Como você vai usar o Vitrine?</legend><button type="button" className={tipoConta === "cliente" ? "type-option selected" : "type-option"} onClick={()=>setTipoConta("cliente")}><span>⌕</span><strong>Sou cliente</strong><small>Quero descobrir negócios</small>{tipoConta === "cliente" && <b>✓</b>}</button><button type="button" className={tipoConta === "empreendedor" ? "type-option selected" : "type-option"} onClick={()=>setTipoConta("empreendedor")}><span>↗</span><strong>Sou empreendedor</strong><small>Quero divulgar minha empresa</small>{tipoConta === "empreendedor" && <b>✓</b>}</button></fieldset>
        <button className="button-light signup-submit" type="submit">Criar conta <span>↗</span></button>{mensagem && <p className="form-message" role="status">{mensagem}</p>}
      </form><div className="auth-switch">Já possui uma conta? <button onClick={login}>Entrar</button></div><p className="auth-footnote">Seus dados serão enviados ao sistema após a integração do cadastro com o back-end.</p></div>
    </section>
  </main>;
}
export default Cadastro;
