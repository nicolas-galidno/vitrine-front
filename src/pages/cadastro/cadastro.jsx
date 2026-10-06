import { useState } from "react";
import TelefonesInput from "../../components/TelefonesInput";
import { criarEmpresario, criarUsuario, mensagemDeErro } from "../../services/contas";
import { cnpjValido, mascaraCnpj, mascaraTelefone, soDigitos, telefoneValido } from "../../utils/formatar";
import "./cadastro.css";

function Cadastro({ voltar, login, aoCriar }) {
  const [tipoConta, setTipoConta] = useState("cliente");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefones, setTelefones] = useState([""]);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState("");
  async function criarConta(e) {
    e.preventDefault();
    if (senha.length < 6) { setMensagem("Sua senha precisa ter pelo menos 6 caracteres."); return; }
    if (senha !== confirmarSenha) { setMensagem("As senhas não são iguais. Confira e tente novamente."); return; }
    if (!nome.trim()) { setMensagem("Informe seu nome para continuar."); return; }
    const empreendedor = tipoConta === "empreendedor";
    const listaTelefones = telefones.filter((t) => t.trim());
    if (empreendedor) {
      if (!cnpjValido(cnpj)) { setMensagem("Informe um CNPJ válido (14 números)."); return; }
      if (listaTelefones.length === 0) { setMensagem("Informe pelo menos um telefone de contato."); return; }
      if (!listaTelefones.every(telefoneValido)) { setMensagem("Confira os telefones: use DDD + número."); return; }
    } else if (!telefoneValido(telefone)) { setMensagem("Informe um telefone válido com DDD."); return; }
    setEnviando(true); setMensagem("");
    try {
      const base = { nome: nome.trim(), email: email.trim(), senha };
      if (empreendedor) await criarEmpresario({ ...base, cnpj: soDigitos(cnpj), telefones: listaTelefones.map(soDigitos) });
      else await criarUsuario({ ...base, telefone: soDigitos(telefone) });
      setMensagem("Conta criada com sucesso!");
      aoCriar?.(tipoConta, email.trim());
    } catch (error) {
      setMensagem(mensagemDeErro(error));
    } finally { setEnviando(false); }
  }
  return <main className="cadastro-page">
    <nav className="auth-navbar"><button className="brand-mark" onClick={voltar}>Vitrine<span>.</span></button><button className="auth-back" onClick={voltar}>← Voltar ao início</button></nav>
    <section className="signup-layout"><div className="signup-intro"><span className="eyebrow"><span className="eyebrow-dot"/> BEM-VINDO AO VITRINE</span><h1>Faça parte<br/>dessa <span>conexão.</span></h1><p>Crie sua conta e encontre novos lugares para conhecer ou dê mais visibilidade ao seu negócio.</p><div className="signup-choice-preview"><div><span>01</span><strong>Sou cliente</strong><small>Encontre e favorite negócios.</small></div><div><span>02</span><strong>Sou empreendedor</strong><small>Apresente sua empresa ao mundo.</small></div></div></div>
      <div className="signup-card"><div className="signup-heading"><span className="auth-symbol">V.</span><div><h2>Crie sua conta</h2><p>É simples começar por aqui.</p></div></div><form className="signup-form" onSubmit={criarConta}>
        <label>Nome completo<input value={nome} onChange={(e)=>setNome(e.target.value)} placeholder="Como podemos te chamar?" autoComplete="name" required/></label>
        <label>E-mail<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="voce@exemplo.com" autoComplete="email" required/></label>
        <div className="signup-fields"><label>Senha<input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} placeholder="Mínimo 6 caracteres" autoComplete="new-password" required minLength={6}/></label><label>Confirmar senha<input type="password" value={confirmarSenha} onChange={(e)=>setConfirmarSenha(e.target.value)} placeholder="Repita a senha" autoComplete="new-password" required/></label></div>
        {tipoConta === "cliente"
          ? <label>Telefone<input type="tel" inputMode="tel" value={telefone} onChange={(e)=>setTelefone(mascaraTelefone(e.target.value))} placeholder="(11) 91234-5678" autoComplete="tel" required/></label>
          : <><label>CNPJ<input inputMode="numeric" value={cnpj} onChange={(e)=>setCnpj(mascaraCnpj(e.target.value))} placeholder="00.000.000/0000-00" required/></label><TelefonesInput valor={telefones} aoMudar={setTelefones}/></>}
        <fieldset className="account-type"><legend>Como você vai usar o Vitrine?</legend><button type="button" className={tipoConta === "cliente" ? "type-option selected" : "type-option"} onClick={()=>setTipoConta("cliente")}><span>⌕</span><strong>Sou cliente</strong><small>Quero descobrir negócios</small>{tipoConta === "cliente" && <b>✓</b>}</button><button type="button" className={tipoConta === "empreendedor" ? "type-option selected" : "type-option"} onClick={()=>setTipoConta("empreendedor")}><span>↗</span><strong>Sou empreendedor</strong><small>Quero divulgar minha empresa</small>{tipoConta === "empreendedor" && <b>✓</b>}</button></fieldset>
        <button className="button-light signup-submit" type="submit" disabled={enviando}>{enviando ? "Criando..." : "Criar conta"} <span>↗</span></button>{mensagem && <p className="form-message" role="status">{mensagem}</p>}
      </form><div className="auth-switch">Já possui uma conta? <button onClick={login}>Entrar</button></div><p className="auth-footnote">Seus dados serão enviados ao sistema após a integração do cadastro com o back-end.</p></div>
    </section>
  </main>;
}
export default Cadastro;
