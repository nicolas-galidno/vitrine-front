import { mascaraTelefone } from "../utils/formatar";
import "./formularios.css";

const MAXIMO = 5;

// Lista editável de telefones (um empresário pode ter mais de um).
function TelefonesInput({ valor, aoMudar, titulo = "Telefones de contato", className = "" }) {
  const lista = valor.length ? valor : [""];
  const atualizar = (indice, texto) => aoMudar(lista.map((t, i) => (i === indice ? mascaraTelefone(texto) : t)));
  const remover = (indice) => aoMudar(lista.filter((_, i) => i !== indice));
  return <div className={`campo-multiplo ${className}`} role="group" aria-label={titulo}>
    <span className="campo-titulo">{titulo}</span>
    {lista.map((telefone, i) => <div className="telefone-linha" key={i}>
      <input type="tel" inputMode="tel" autoComplete="tel" value={telefone} onChange={(e) => atualizar(i, e.target.value)} placeholder="(11) 91234-5678" aria-label={`Telefone ${i + 1}`} />
      {lista.length > 1 && <button type="button" className="telefone-remover" onClick={() => remover(i)} aria-label={`Remover telefone ${i + 1}`}>×</button>}
    </div>)}
    {lista.length < MAXIMO && <button type="button" className="telefone-adicionar" onClick={() => aoMudar([...lista, ""])}>＋ Adicionar outro telefone</button>}
  </div>;
}
export default TelefonesInput;
