import { useEffect, useState } from "react";
import { estados } from "../data/estados";
import { listarCidades } from "../services/localidades";

// Estado + cidade. Renderiza dois <label> para encaixar direto na grade do formulário.
function SeletorLocalidade({ estado, cidade, aoMudar }) {
  const [cidades, setCidades] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    if (!estado) return;
    let ativo = true;
    setCarregando(true); setFalhou(false);
    listarCidades(estado)
      .then((lista) => { if (ativo) setCidades(lista); })
      .catch(() => { if (ativo) { setCidades([]); setFalhou(true); } })
      .finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, [estado]);

  const opcoes = cidade && !cidades.includes(cidade) ? [cidade, ...cidades] : cidades;
  return <>
    <label>Estado
      <select value={estado} onChange={(e) => aoMudar({ estado: e.target.value, cidade: "" })} required>
        <option value="">Selecione</option>
        {estados.map((uf) => <option key={uf.sigla} value={uf.sigla}>{uf.nome} ({uf.sigla})</option>)}
      </select>
    </label>
    <label>Cidade
      {falhou
        ? <input value={cidade} onChange={(e) => aoMudar({ estado, cidade: e.target.value })} placeholder="Digite sua cidade" required />
        : <select value={cidade} onChange={(e) => aoMudar({ estado, cidade: e.target.value })} disabled={!estado || carregando} required>
            <option value="">{!estado ? "Escolha o estado primeiro" : carregando ? "Carregando cidades..." : "Selecione"}</option>
            {opcoes.map((nome) => <option key={nome} value={nome}>{nome}</option>)}
          </select>}
      {falhou && <small className="campo-aviso">Não foi possível carregar a lista de cidades. Digite o nome manualmente.</small>}
    </label>
  </>;
}
export default SeletorLocalidade;
